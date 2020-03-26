<template>
  <header class="flex justify-between mb-4 pb-4 border-solid border-gray-800 border-b-2">
    <a href="https://archerygamesdenver.com/">
      <img class="ml-4 mt-4" src="../../assets/logo.png" alt="Archery Games logo" width="75" height="75">
    </a>
    <!-- This href will link back to this app -->
    <a href="">
      <div class="flex mr-8 mt-6">
        <h2 class="mr-1 leading-none text-4xl">
          <slot></slot> <span class="block uppercase">League</span>
        </h2>
        <img src="../../assets/img/target.svg" alt="A target with an arrow in the center" width="50">
      </div>
    </a>
  </header>
</template>

<script>
  export default {
    name: 'Header'
  }
</script>

<style scoped>
  a, a:visited {
    color: #111;
  }
</style>
