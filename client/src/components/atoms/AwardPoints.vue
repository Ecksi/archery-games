<template>
  <div class="award-winner">
    <h2>Award Winner</h2>
    <section class="winner">
      <img class="test" @click="$emit('awardWinner')" src="../../assets/img/winner.svg" alt="A gold medal" height="100" width="100">
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
