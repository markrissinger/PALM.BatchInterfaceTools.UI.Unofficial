<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
  import Navbar from './components/Navbar.vue'
  import Footer from './components/Footer.vue'
</script>

<template>
  <div id="page-container" class="container-fluid">
    <Navbar />

    <main id="content-wrap" class="container">
      <router-view />
    </main>

    <br/>

    <Footer />
  </div>
</template>

<style scoped>
  #page-container {
    position: relative;
    min-height: 100vh;
  }

  #content-wrap {
    padding-bottom: 2.5rem; /* Footer height */
  }
</style>
