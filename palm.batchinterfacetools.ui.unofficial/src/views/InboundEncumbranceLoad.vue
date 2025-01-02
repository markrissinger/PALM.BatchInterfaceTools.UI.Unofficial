<template>
  <div class="col-lg-8 offset-2">
    <div class="row">
      <div class="h3 text-center">Inbound Encumbrance Load (POI002) Converter</div>
    </div>

    <br />

    <!--Warning-->
    <div class="card border-danger my-3" style="">
      <div class="card-body">
        <!--<h5 class="card-title">Warning card title</h5>-->
        <p class="card-text">
            Substantial effort has been made to ensure the accuracy of these conversions. However, no guarantee is made that the conversion will be correct.
        </p>
      </div>
    </div>

    <br />

    <p class="">
      <!--Instructions-->
      <span class="h6">Instructions</span><br />
      1. Download and complete a copy of the template below.<br />
      2. Upload the completed template to the <strong>Input File</strong> field.<br />
      3. Optionally fill out the <strong>Agency</strong> and <strong>Agency Business System</strong> fields. They can be used in the name of the returned file.<br />
      4. Select an <strong>Output Format</strong>. File will return a text file based on PALM Knowledge Center specifications. Text Contents will return just the contents of the file.<br />

      <hr class="my-4" />

      <!--Interface Templates-->
      <span class="h6">Interface Templates</span><br />
      <a href="../../exceltemplates/purchaseorders/InboundEncumbranceLoadTemplate.xlsx">Blank Template</a><br />
      <a href="../../exceltemplates/purchaseorders/InboundEncumbranceLoadSample.xlsx">Sample Data Template</a>

      <hr class="my-4" />

      <!--Additional Information-->
      <span class="h6">Additional Information</span><br />
      PALM Knowledge Center: <a href="https://myfloridacfofloridapalm.us.document360.io/docs/inbound-encumbrance-load-poi002" target="_blank">Inbound Encumbrance Load</a>.
    </p>

    <hr class="my-4" />

    <!--Inputs-->
    <form>
      <div class="mb-3">
        <label for="formFile" class="form-label">Input File*</label>
        <input class="form-control" type="file" id="formFile" required>
      </div>

      <br />

      <div class="row g-2">
        <div class="mb-3 col-md-4">
          <label for="agencyInput" class="form-label">Agency</label>
          <input type="text" maxlength="5" class="form-control" id="agencyInput">
        </div>

        <div class="mb-3 col-md-4">
          <label for="agencyBusinessSystemInput" class="form-label">Agency Business System</label>
          <input type="text" maxlength="3" class="form-control" id="agencyBusinessSystemInput">
        </div>

        <div class="mb-3 col-md-4">
          <label for="outputFormat" class="form-label">Output Format</label>
          <select class="form-select" id="outputFormat" aria-label="Select output format">
            <option selected value="1">File</option>
            <option value="2">Text Contents</option>
          </select>
        </div>
      </div>

      <br />

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>

    <br /><br />

    <label for="textContents" class="form-label" hidden>Text Contents</label>
    <textarea class="form-control" readonly id="textContents" rows="3" hidden></textarea>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

    export default defineComponent({
        components: {
        },
        directives: {
        },
        filters: {
        },
        props: {
        },
        data() {
            return {
            }
        },
        computed: {
        },
        watch: {
        },
        beforeCreate() {
        },
        created() {
        },
        beforeMount() {
        },
        mounted() {
        },
        updated() {
        },
        activated() {
        },
        deactivated() {
        },
        beforeDestroy() {
        },
        destroyed() {
        },
        methods: {
        },
    });
</script>

<style>
</style>
