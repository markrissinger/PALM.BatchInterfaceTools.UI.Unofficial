<template>
  <footer class="border-top footer text-muted bg-body">
    <div class="container py-4 py-md-5 px-4 px-md-3 text-body-secondary">
      <div class="row">
        <div class="col-md-5 offset-md-1">
          <a class="d-inline-flex align-items-center mb-2 text-body-emphasis text-decoration-none" href="/" aria-label="PALM Batch Interface Tools (Unofficial)">
            <img src="../../public/pbit.icon.ico" alt="PBIT Icon" width="30" height="30" />
            <span class="fs-5 px-2">PALM Batch Interface Tools (PBIT)</span>
          </a>
          <ul class="list-unstyled small">
            <li class="mb-2">Code and site tools are licensed <a href="https://github.com/markrissinger/PALM.BatchInterfaceTools.UI.Unofficial/blob/master/LICENSE.txt" target="_blank" rel="license noopener">MIT.</a></li>
            <li class="mb-2">Currently in development.</li>
          </ul>
        </div>
        <!--offset-lg-1 mb-3-->
        <div class="col-md-4 offset-md-2">
          <h5>Links</h5>
          <ul class="list-unstyled">
            <li class="mb-2"><router-link to="/" aria-current="page">Home</router-link></li>
            <li class="mb-2"><router-link to="/About">About</router-link></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

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
  footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 2.0rem; /* Footer height */
  }
</style>
