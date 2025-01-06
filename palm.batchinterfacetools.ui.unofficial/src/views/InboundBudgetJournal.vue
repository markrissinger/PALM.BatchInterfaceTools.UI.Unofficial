<template>
  <div class="col-md-10 offset-md-1">
    <div class="row">
      <div class="h2 text-center"><strong>Inbound Budget Journal (KKI001) Converter</strong></div>
    </div>

    <hr class="my-4" />

    <!--Instructions-->
    <BatchConverterInstructions />

    <hr class="my-4" />

    <!--Interface Templates-->
    <p>
      <span class="h6">Interface Templates</span>
      <br /><i class="h6 bi bi-file-spreadsheet"></i> <a href="https://1drv.ms/x/s!Aqj3-TMk1RMsj03vRi1E_iKHE1yy?download=1" download target="_blank">Blank Template</a>
      <br /><i class="h6 bi bi-file-spreadsheet"></i> <a href="https://1drv.ms/x/s!Aqj3-TMk1RMsj0_p-cqD_uES30Py?download=1" download target="_blank">Sample Data Template</a>
    </p>

    <hr class="my-4" />

    <!--Additional Information-->
    <p>
      <span class="h6">Additional Information</span><br />
      PALM Knowledge Center: <a href="https://myfloridacfofloridapalm.us.document360.io/docs/inbound-budget-journal-kki001" target="_blank">Inbound Budget Journal</a>
    </p>

    <hr class="my-4" />

    <!--Inputs-->
    <BatchConverterInputForm controllerName="InboundBudgetJournal" />

    <!--Warning-->
    <BatchConverterWarning />

    <br />
  </div>
</template>

<script setup lang="ts">
  import BatchConverterInputForm from '../components/BatchConverterInputForm.vue'
  import BatchConverterInstructions from '../components/BatchConverterInstructions.vue'
  import BatchConverterWarning from '../components/BatchConverterWarning.vue'
</script>

<style>
</style>
