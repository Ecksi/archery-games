<template>
  <div class="start">
    <section class="team-scores split h-full">
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
    <section class="award-points split h-full">
      <!-- On push/click point is awarded to the winning team -->
      <div>
        <h1>award winner</h1>
        <img class="winner" src="../../assets/img/winner.svg" alt="A gold medal" height="50" width="50">
      </div>
      <div>
        <h1>award winner</h1>
        <img class="winner" src="../../assets/img/winner.svg" alt="A gold medal" height="50" width="50">
      </div>
    </section>
    <section class="match-info center h-full">
      <h3 class="round">- Round X -</h3>
      <div class="current-round">
        <!-- This should be able to cycle between the 9 rounds -->
        <!-- Should this be only 1 way? -->
        <paginate>Jailbreak</paginate>
      </div>
    </section>
    <section>
      <!-- Add timer functionality -->
      <button class="start-button">
        <span>Start</span>
      </button>
    </section>
  </div>
</template>

<script>
  import Paginate from '@/components/atoms/Paginate';

  export default {
    name: 'StartMatch',
    components: { Paginate }
  }
</script>

<style>
  .start {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100vh - 129px);
  }

  .h-full {
    flex: 1;
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
    background-color: #009B4C;
    border: none;
    outline: none;
    font-size: 24px;
    font-weight: bold;
    color: #CCC;
    letter-spacing: 2px;
  }

  .start-button span {
    filter: drop-shadow(0 2px 1px rgb(58, 58, 58));
  }
</style>
