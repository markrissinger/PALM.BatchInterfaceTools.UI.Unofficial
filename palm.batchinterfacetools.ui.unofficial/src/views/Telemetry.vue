<template>
  <div class="col-md-8 offset-md-2">
    <p class="h0 text-center"><strong>Telemetry</strong></p>

    <hr class="my-4" />

    <form @submit="submitForm">
      <!--Agency-->
      <div class="row g-2">
        <div class="mb-3 col-md-4">
          <label for="startdatepicker" class="form-label">Start Date: </label>
          <div id="startdatepicker"
               class="input-group date"
               data-date-format="mm-dd-yyyy">
            <input class="form-control"
                   type="text"
                   v-model="startDate"
                   readonly />
            <span class="input-group-addon">
              <i class="glyphicon glyphicon-calendar"></i>
            </span>
          </div>
        </div>

        <!--Agency Business System-->
        <div class="mb-3 col-md-4">
          <label for="enddatepicker" class="form-label">End Date: </label>
          <div id="enddatepicker"
               class="input-group date"
               data-date-format="mm-dd-yyyy">
            <input class="form-control"
                   type="text"
                   v-model="endDate"
                   readonly />
            <span class="input-group-addon">
              <i class="glyphicon glyphicon-calendar"></i>
            </span>
          </div>
        </div>

        <!--Output Format-->
        <div class="mb-3 col-md-4">
          <label for="interfaceSelector" class="form-label">Interface</label>
          <select v-model="interfaceId" class="form-select" id="interfaceSelector" aria-label="Select output format">
            <option disabled value="">Select an interace</option>
            <option value="">All</option>
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
  </div>
</template>

<script setup lang="ts">
</script>

<style>
  .h0{
      font-size: 42px;
  }
</style>
