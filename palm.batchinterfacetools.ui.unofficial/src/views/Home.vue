<template>
  <div class="col-md-10 offset-md-1">
    <div class="row">
      <div class="h2 text-center"><strong>PALM Batch Interface Tools (PBIT)</strong></div>
    </div>

    <hr class="my-4" />

    <div class="card text-bg-tertiary mb-3" style="max-width: 100%;">
      <div class="card-header h6 text-center">
        Efficiently create PALM specific batch files from Excel templates
      </div>
      <div class="card-body">
        <div class="row card-text">
          <div class="col-md-3"></div>
          <div class="mb-3 col-md-2 text-center">
            <i class="h1 bi bi-file-spreadsheet"></i><br />
            <div class="h6">Excel Template</div>
          </div>
          <div class="mb-3 col-md-2 text-center">
            <i class="h1 bi bi-arrow-right"></i>
          </div>
          <div class="mb-3 col-md-2 text-center">
            <i class="h1 bi bi-file-text"></i><br />
            <div class="h6">PALM Batch File</div>
          </div>
        </div>
        <p class="card-text text-center">Select one of the available interfaces from the <span class="h6">PALM Batch Interface File Converters</span> above to get started!</p>
      </div>
    </div>

    <hr class="my-4" />

    <!--Additional Resources-->
    <p>
      <span class="h6">Additional Resources</span><br />
      <a href="https://myfloridacfo.com/floridapalm" target="_blank">PALM Website</a><br />
      <a href="https://myfloridacfofloridapalm.us.document360.io/" target="_blank">PALM Knowledge Center</a>
    </p>

    <hr class="my-4" />

    <!--Warning-->
    <BatchConverterWarning />
  </div>
</template>

<script setup lang="ts">
  import BatchConverterWarning from '../components/BatchConverterWarning.vue'
</script>

<style>
</style>
