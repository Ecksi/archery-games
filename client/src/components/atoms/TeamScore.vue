<template>
  <div class="match-info">
    <section class="team-info home-team">
      <!-- limit chars to 24 -->
      <h1 :class="['team-name', {'center-name': $store.state.match.homeTeam.length < 12}]">{{ $store.state.match.homeTeam  }}</h1>
      <span class="score">{{ $store.state.match.homeScore }}</span>
    </section>
    <section class="team-info away-team">
      <!-- limit chars to 24 -->
      <h1 :class="['team-name', {'center-name': $store.state.match.awayTeam.length < 12}]">{{ $store.state.match.awayTeam  }}</h1>
      <span class="score">{{ $store.state.match.awayScore }}</span>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'TeamScore'
  }
</script>

<style scoped>
  .match-info {
    display: flex;
    justify-content: space-around;
    padding: 0 16px;
    text-align: center;
  }

  .team-info {
    width: 100%;
  }

  .home-team {
    padding-right: 16px;
  }

  .away-team {
    padding-left: 16px;
  }

  .team-name {
    height: 60px;
  }

  .center-name {
    line-height: 50px;
  }

  .score {
    display: inline-block;
    margin: 16px auto 0 auto;
    height: 50px;
    width: 40px;
    border: 1px solid #666;
    border-radius: 25%;
    font-size: 32px;
    line-height: 50px;
    box-shadow: 2px 2px rgba(102, 102, 102, 0.3);
  }
</style>