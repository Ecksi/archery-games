<template>
  <div>
    <h2 class="time">{{ startTime }}</h2>
    <section class="match bg-color">
      <h2 class="team-a">{{ homeTeam }}</h2>
      <img src="../../assets/img/versus.png" alt="" height=50 width=50>
      <h2 class="team-a">{{ awayTeam }}</h2>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'MatchInfo',
    props: {
      startTime: {
        type: String,
        default: '2:30'
      },
      homeTeam: {
        type: String,
        default: 'Home Team'
      },
      awayTeam :{
        type: String,
        default: 'Away Team'
      }
    }
  }
</script>

<style scoped>
  .time {
    font-size: 32px;
    text-align: center;
  }

  .match {
    display: flex;
    justify-content: center;
    margin: 16px 0;
    text-align: center;
  }

  /* pull team color, create gradient off that */
  .bg-color {
    background-color: rgba(135, 206, 250, 0.5);
  }

  section h2 {
    width: 125px;
    font-size: 28px;
    line-height: 1;
  }

  section img {
    margin: auto 16px;
  }

  .team-a, .team-b {
    border: 1px solid red;
    height: 100%;
    padding: 24px;
    cursor: pointer;
  }
</style>
