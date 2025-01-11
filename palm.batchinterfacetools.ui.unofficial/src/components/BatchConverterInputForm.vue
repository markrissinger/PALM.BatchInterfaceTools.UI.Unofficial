<template>
  <form @submit="submitForm">
    <!--Input File-->
    <div class="mb-3">
      <label for="inputFile" class="form-label">Input File*</label>
      <input class="form-control" type="file" id="inputFile" ref="fileInput" @change="onFileChanged" required>
    </div>

    <br />

    <!--Agency-->
    <div class="row g-2">
      <div class="mb-3 col-md-4">
        <label for="agencyInput" class="form-label">Agency</label>
        <input v-model="agencyInput" type="text" maxlength="5" class="form-control" id="agencyInput">
      </div>

      <!--Agency Business System-->
      <div class="mb-3 col-md-4">
        <label for="agencyBusinessSystemInput" class="form-label">Agency Business System</label>
        <input v-model="agencyBusinessSystemInput" type="text" maxlength="3" class="form-control" id="agencyBusinessSystemInput">
      </div>

      <!--Output Format-->
      <div class="mb-3 col-md-4">
        <label for="outputFormatSelector" class="form-label">Output Format</label>
        <select v-model="outputFormat" class="form-select" id="outputFormatSelector" aria-label="Select output format">
          <option disabled value="">Select an output format</option>
          <option value="1">File</option>
          <option value="2">Text Contents</option>
        </select>
      </div>
    </div>
    <br />

    <!--Submit-->
    <button type="submit" class="btn btn-primary" id="submitButton">
      <span v-show="showSpinner" class="spinner-border spinner-border-sm" role="status" aria-hidden="true" id="submitButtonSpinner"></span>
      Submit
    </button>
  </form>

  <br />

  <!--Output Text Contents-->
  <div v-show="showTextContents" class="row">
    <label for="textContents" class="form-label" hidden>Text Contents</label>
    <textarea v-model="textContents" class="form-control" wrap="off" readonly id="textContents" rows="15"></textarea>
  </div>

  <!--Modal Popup (File Download Only)-->
  <div class="modal fade" id="modalFileDownload" tabindex="-1" aria-labelledby="modalFileDownloadLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="modalFileDownloadLabel">File download complete</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>Text file downloaded successfully, please check your Downloads folder.</p>
        </div>
      </div>
    </div>
  </div>

  <!--Modal Popup (Exception)-->
  <div class="modal fade" id="modalException" tabindex="-1" aria-labelledby="modalExceptionLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="modalExceptionLabel">Error processing the file</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          {{ exceptionMessage }}
        </div>
      </div>
    </div>
  </div>

  <br />
</template>

<script setup lang="ts">
  // script setup using Composition API
  // imports
  import { watch, ref, inject } from 'vue'
  import axios from 'axios';
  import {Modal} from 'bootstrap';

  // model variables
  const outputFormat = ref('1')
  const agencyBusinessSystemInput = ref('')
  const agencyInput = ref('')
  const textContents = ref('')
  const showTextContents = ref(false)
  const fileInput = ref<HTMLInputElement | null>(null)
  const files = ref()
  const showSpinner = ref(false)
  const exceptionMessage = ref('')

  // incoming properties from parent
  const props = defineProps({
    controllerName: { type: String, required: true }
  })

  function onFileChanged() {
    files.value = fileInput.value?.files
  }

  // submit - need to determine to which controller, which method, etc
  function submitForm(e: any) {
    // prevent call to server and page refresh
    e.preventDefault()

    // hide the text area
    showTextContents.value = false;

    // spin the button kronk
    (document.getElementById('submitButton') as HTMLButtonElement).classList.add("disabled");
    showSpinner.value = true;

    // determine which controller to hit
    const controller = props.controllerName

    // determine which method to hit
    const method = determineControllerMethod(outputFormat.value)
    const outputFile = (outputFormat.value === '1')

    // create api url endpoint
    const url = import.meta.env.VITE_PBIT_API_DOMAIN + controller + "/" + method

    // setup query params
    const agency = agencyInput.value
    const agencyBusinessSystem = agencyBusinessSystemInput.value

    //const data = this.data
    axios.post(url, 
      {
        file: files.value[0]
      }
      ,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        params: {
          agency,
          agencyBusinessSystem
        },
        withCredentials: false,
        responseType: outputFile ? 'blob' : 'json'
      }
    )
      .then(function (response) {
        if (outputFile) {
          // download the file from the returned blob
          const blob = response.data
          const url = window.URL.createObjectURL(blob);
          const link = document.createElement('a');
          const filename = response.headers["content-disposition"].split("filename=")[1].split(";")[0];
          link.href = url;
          link.download = filename;
          link.click();

          // download complete; notify user
          const modal = new Modal((document.getElementById('modalFileDownload') as HTMLElement))
          modal.show()
        }
        else {
          // load the contents to the text area
          textContents.value = response.data

          // display the text area
          showTextContents.value = true;
        }
      })
      .catch((error) => {
        // Handle error
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          // alert the user something brokeded
          if (outputFile) {
            error.response.data.text().then((res : any) => {
              const blobError = JSON.parse(res);
              exceptionMessage.value = blobError.message;
            });
          }
          else {
            exceptionMessage.value = error.response.data.message;
          }
        } else if (error.request) {
          // The request was made but no response was received
          exceptionMessage.value = "Gremlins appear to have taken the API offline...";
        } else {
          // Something happened in setting up the request that triggered an Error
          exceptionMessage.value = "Double check the input file to make sure a valid file was selected.";
        }

        const modal = new Modal((document.getElementById('modalException') as HTMLElement))
        modal.show()
      })
      .finally(() => {
        // stop the button kronk
        (document.getElementById('submitButton') as HTMLButtonElement).classList.remove("disabled");
        showSpinner.value = false;
      })
  }

  function determineControllerMethod(selectedOption: string) {
    if (selectedOption === '1') {
      return 'ExcelToInboundFile'
    }
    else if (selectedOption === '2') {
      return 'ExcelToInboundFileContents'
    }
  }
</script>

<style>
</style>
