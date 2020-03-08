<template>
  <div class="award-winner">
    <h1>Round Winner</h1>
    <section class="winner">
      <p>team 1</p>
      <img src="../../assets/img/winner.svg" alt="A gold medal" height="50" width="50">
      <p>team 2</p>
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
    justify-content: space-around;
    margin-top: 24px;
  }

  .winner p {
    font-size: 20px;
    padding-top: 12px;
  }
</style>
