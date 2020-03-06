<template>
  <div class="start">
    <section class="team-scores split">
      <!-- Replace X's with dynamic score boxes that start at 0 -->
      <div>
        <h1>Team A Name</h1>
        <span>X</span>
      </div>
      <div>
        <h1>Team A Name</h1>
        <span>X</span>
      </div>
    </section>
    <section class="award-points split">
      <!-- On push/click point is awarded to the winning team -->
      <div>
        <h1>award winner</h1>
        <img class="winner" src="../../assets/menus/winner.svg" alt="A gold medal" height="50" width="50">
      </div>
      <div>
        <h1>award winner</h1>
        <img class="winner" src="../../assets/menus/winner.svg" alt="A gold medal" height="50" width="50">
      </div>
    </section>
    <section class="match-info center">
      <h3 class="round">- Round X -</h3>
      <div class="current-round">
        <!-- This should be able to cycle between the 9 rounds -->
        <!-- Should this be only 1 way? -->
        <span>&lt;</span>
        <h1>Jailbreak</h1>
        <span>&gt;</span>
      </div>
    </section>
    <section>
      <!-- Add timer functionality -->
      <button class="start-button">Start</button>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'StartMatch'
  }
</script>

<style>
  .start {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100vh - 114px);
  }

  .split {
    display: flex;
    justify-content: space-between;
    height: 150px;
    border: 1px solid red;
    text-align: center;
  }

  .split div {
    width: 50%;
  }

  .center {
    text-align: center;
  }

  .winner {
    margin-top: 24px;
  }

  .round {
    margin-top: 24px;
    margin-bottom: 16px;
  }

  .current-round {
    display: flex;
    justify-content: space-around;
  }

  .match-info span {
    font-size: 32px;
  }

  .match-info h1 {
    padding-top: 8px;
  }
  
  .start-button {
    width: 100%;
    height: 70px;
    background-color: green;
  }
</style>
