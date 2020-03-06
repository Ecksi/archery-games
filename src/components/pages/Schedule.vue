<template>
  <div class="schedule">
    <header>
      <span>&lt;</span>
      <h1>March 20</h1>
      <span>&gt;</span>
    </header>
    <!-- component times -->
    <div>
      <h2 class="time">6:30</h2>
      <section class="match">
        <h2>team a name</h2>
        <img src="../../assets/menus/red-card.svg" alt="" height=50 width=50>
        <h2>team b name</h2>
      </section>
    </div>

    <div>
      <h2 class="time">7:30</h2>
      <section class="match">
        <h2>team a name</h2>
        <img src="../../assets/menus/red-card.svg" alt="" height=50 width=50>
        <h2>team b name</h2>
      </section>
    </div>

    <div>
      <h2 class="time">8:30</h2>
      <section class="match">
        <h2>team a name</h2>
        <img src="../../assets/menus/red-card.svg" alt="" height=50 width=50>
        <h2>team b name</h2>
      </section>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Schedule'
  }
</script>

<style>
  .schedule {
    margin: 16px;
  }

  header {
    display: flex;
    justify-content: space-around;
    margin-bottom: 24px;
  }

  header h1 {
    padding-top: 4px;
  }

  header span {
    font-size: 32px;
  }

  h2 {
    text-align: center;
  }

  .time {
    margin-top: 36px;
    margin-bottom: 24px;
    font-size: 32px;
  }

  section h2 {
    width: 125px;
    font-size: 28px;
    line-height: 1;
  }

  section img {
    margin: 0 16px;
  }

  .match {
    display: flex;
    justify-content: center;
  }
</style>
