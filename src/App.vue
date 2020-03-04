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
