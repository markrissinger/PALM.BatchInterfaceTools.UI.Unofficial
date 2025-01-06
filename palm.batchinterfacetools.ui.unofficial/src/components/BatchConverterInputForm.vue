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
    <button type="submit" class="btn btn-primary">Submit</button>
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

  <br />
</template>

<script setup lang="ts">
  // script setup using Composition API
  // imports
  import { watch, ref, inject } from 'vue'
  import axios from 'axios';
  import {Modal} from 'bootstrap';


// Inject Bootstrap with the same key as defined in main.js
//const bootstrap = inject('bootstrap');


  //import * as bootstrap from 'bootstrap';

  // model variables
  const outputFormat = ref('1')
  const agencyBusinessSystemInput = ref('')
  const agencyInput = ref('')
  const textContents = ref('')
  const showTextContents = ref(false)
  const fileInput = ref<HTMLInputElement | null>(null)
  const files = ref()

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
        // stop the button kronk

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
          const myModal = new Modal((document.getElementById('modalFileDownload') as HTMLFormElement))
          //const myModal = (document.getElementById('modalFileDownload') as HTMLFormElement)
          myModal.show()
        }
        else {
          // load the contents to the text area
          textContents.value = response.data

          // display the text area
          showTextContents.value = true;
        }
      })
      .catch(() => {
        // stop the button kronk

        // aler the user something brokeded

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
