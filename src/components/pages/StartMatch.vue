<template>
  <div class="start">
    <section class="team-scores split h-full">
      <!-- limit chars to 24 -->
      <team-score>Knocked Out</team-score>
      <team-score>Test for long team namesa</team-score>
    </section>
    <section class="award-points h-full">
      <award-points></award-points>
    </section>
    <section class="match-info center h-full">
        <!-- Call store for round data  -->
      <h3 class="round">- Round X -</h3>
      <div class="current-round">
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
  import TeamScore from '@/components/atoms/TeamScore';
  import AwardPoints from  '@/components/atoms/AwardPoints';
  import Paginate from '@/components/atoms/Paginate';

  export default {
    name: 'StartMatch',
    components: { 
      TeamScore,
      AwardPoints,
      Paginate
    }
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
    text-align: center;
  }

  .split div {
    width: 50%;
  }

  .center {
    text-align: center;
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
    color: #FFF;
    letter-spacing: 2px;
  }

  .start-button span {
    filter: drop-shadow(0 2px 1px rgb(58, 58, 58));
  }
</style>
