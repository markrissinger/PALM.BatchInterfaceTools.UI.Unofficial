<template>
  <div class="col-lg-8 offset-2">
    <div class="row">
      <div class="h3 text-center">Inbound Encumbrance Load (POI002) Converter</div>
    </div>

    <br />

    <!--Warning-->
    <BatchConverterWarning />

    <br />

    <!--Instructions-->
    <BatchConverterInstructions />

    <hr class="my-4" />

    <!--Interface Templates-->
    <p>
      <span class="h6">Interface Templates</span><br />
      <a href="../../exceltemplates/purchaseorders/InboundEncumbranceLoadTemplate.xlsx">Blank Template</a><br />
      <a href="../../exceltemplates/purchaseorders/InboundEncumbranceLoadSample.xlsx">Sample Data Template</a>
    </p>

    <hr class="my-4" />

    <!--Additional Information-->
    <p>
      <span class="h6">Additional Information</span><br />
      PALM Knowledge Center: <a href="https://myfloridacfofloridapalm.us.document360.io/docs/inbound-encumbrance-load-poi002" target="_blank">Inbound Encumbrance Load</a>.
    </p>

    <hr class="my-4" />

    <!--Inputs-->
    <BatchConverterInputForm controllerName="InboundEncumbranceLoad" />
  </div>
</template>

<script setup lang="ts">
  import BatchConverterInputForm from '../components/BatchConverterInputForm.vue'
  import BatchConverterInstructions from '../components/BatchConverterInstructions.vue'
  import BatchConverterWarning from '../components/BatchConverterWarning.vue'
</script>

<style>
</style>
