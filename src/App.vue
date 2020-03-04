<template>
  <div>
    <!-- //TODO: header component -->
    <header class="header">
      <img class="header__logo" src="./assets/logo.png" alt="Archery Games logo" width="75">
      <div class="header__title">
        <h2>Denver <span>League</span></h2>
        <img src="./assets/menus/target.svg" alt="A target with an arrow in the center" width="50">
      </div>
    </header>
    <main class="main">
      <!-- //TODO: component list items -->
      <section class="section">
        <img src="./assets/menus/start.svg" alt="Start icon" width="50">
        <h3>Start a match</h3>
      </section>
      <section class="section section-b">
        <img src="./assets/menus/schedule.svg" alt="Schedule icon" width="50">
        <h3>Schedule</h3>
      </section>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  :root {
    font-size: 16px;
    font-family: 'Acme', Helvetica, sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
  }

  html {
    height: 100%;
  }

  body {
    box-sizing: border-box;
    background-color: #CCC;
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

  .main {
    height: 100%;
    margin: 0.25rem;
  }

  .section {
    display: flex;
    padding: 1.5rem;
    background-color: purple;
  }

  .section h3 {
    align-self: center;
    font-size: 28px;
    margin-left: 3rem;
  }

  .section-b {
    background-color: initial;
  }
</style>
