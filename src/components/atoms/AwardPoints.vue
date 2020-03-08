<template>
  <div class="award-winner">
    <h2>Round Winner</h2>
    <section class="winner">
      <p :class="{'center-name': $store.state.match.homeTeam.length < 12}">{{ $store.state.match.homeTeam }}</p>
      <img src="../../assets/img/winner.svg" alt="A gold medal" height="50" width="50">
      <p :class="{'center-name': $store.state.match.awayTeam.length < 12}">{{ $store.state.match.awayTeam }}</p>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'AwardPoints'
  }
</script>

<style scoped>
  .award-winner{ 
    margin-top: 16px;
    text-align: center;
  }

  .winner {
    display: flex;
    margin-top: 24px;
  }

  .winner p {
    font-size: 20px;
    padding: 0 16px;
    width: 50%;
  }

  p.center-name {
    padding-top: 12px;
  }
</style>
