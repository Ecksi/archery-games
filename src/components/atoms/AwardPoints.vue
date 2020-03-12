<template>
  <div class="award-winner">
    <h2>Award Winner</h2>
    <section class="winner">
      <!-- <p :class="{'center-name': $store.state.match.homeTeam.length < 12}" @click="awardPoints('home')">{{ $store.state.match.homeTeam }}</p> -->
      <img class="test" @click="$emit('awardWinner')" src="../../assets/img/winner.svg" alt="A gold medal" height="100" width="100">
      <!-- <p :class="{'center-name': $store.state.match.awayTeam.length < 12}" @click="awardPoints('away')">{{ $store.state.match.awayTeam }}</p> -->
    </section>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex';
  
  export default {
    name: 'AwardPoints',
    methods: {
      ...mapMutations(['awardPoints'])
    }
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
    cursor: pointer;
  }

  p.center-name {
    padding-top: 12px;
  }
  
  .test {
    margin: 0 auto;
    cursor: pointer;
  }
</style>
