<template>
  <header class="header">
    <a href="https://archerygamesdenver.com/">
      <img class="header__logo" src="../../assets/logo.png" alt="Archery Games logo" width="75" height="75">
    </a>
    <!-- This href will link back to this app -->
    <a href="">
      <div class="header__title">
        <h2><slot></slot> <span>League</span></h2>
        <img src="../../assets/menus/target.svg" alt="A target with an arrow in the center" width="50">
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

  .header {
    display: flex;
    justify-content: space-between;
    padding-bottom: 1rem;
    border-bottom: 2px solid #333;
  }

  .header__logo {
    margin-left: 1rem;
    margin-top: 1rem;
  }

  .header__title {
    margin-right: 2rem;
    margin-top: 1.5rem;
  }

  .header__title h2 {
    display: inline-block;
    margin-right: 0.25rem;
    font-size: 2rem;
    line-height: 1;
  }

  .header__title span {
    display: block;
    text-transform: uppercase;
  }
</style>
