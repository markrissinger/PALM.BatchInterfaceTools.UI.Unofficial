<template>
  <div class="col-md-10 offset-md-1">
    <div class="row">
      <div class="h2 text-center"><strong>Inbound Voucher Load (API002) Converter</strong></div>
    </div>

    <hr class="my-4" />

    <!--Instructions-->
    <BatchConverterInstructions />

    <hr class="my-4" />

    <!--Interface Templates-->
    <p>
      <span class="h6">Interface Templates</span>
      <br /><i class="h6 bi bi-file-spreadsheet"></i> <a href="https://1drv.ms/x/s!Aqj3-TMk1RMsj0Isr4FNI63w1LLH?download=1" download target="_blank">Blank Template</a>
      <br /><i class="h6 bi bi-file-spreadsheet"></i> <a href="https://1drv.ms/x/s!Aqj3-TMk1RMsj0WIf5j9rucN9PYa?download=1" download target="_blank">Sample Data Template</a>
    </p>

    <hr class="my-4" />

    <!--Additional Information-->
    <p>
      <span class="h6">Additional Information</span><br />
      PALM Knowledge Center: <a href="https://myfloridacfofloridapalm.us.document360.io/docs/inbound-voucher-load-api0021" target="_blank">Inbound Voucher Load</a>
    </p>

    <hr class="my-4" />

    <!--Inputs-->
    <BatchConverterInputForm controllerName="InboundVoucherLoad" />

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
