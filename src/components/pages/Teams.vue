<template>
  <div class="teams-page">
    <header>
      <h1>Team Roster</h1>  
      <h3>April 2020 League</h3>
    </header>
    <section class="table-header">
      <h3 class="table-teams">Team</h3>
      <h3 class="table-points">Points</h3>
    </section>
    <section v-for="(team, index) in teams" :key="index" class="team" @click="$emit('teamPage', team.name)">
      <img :src="require(`../../assets/avatars/avatar-${index}.svg`)" alt="" height="50">
      <section class="team-info">
        <div>
          <h3>{{ team.name }}</h3>
          <h4>{{ team.color }}</h4>
        </div>
        <div>
          <h3>{{ team.points }}</h3>  
        </div>
      </section>
    </section>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: 'Teams',
    computed: {
      ...mapState({
        teams: (state) => state.teams
      })
    }
  }
</script>

<style scoped>
  .teams-page {
    margin: 0 16px; 
  }

  header {
    margin-bottom: 24px;
  }

  .table-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;
  }

  .table-teams {
    margin-left: 72px;
  }

  .table-points {
    margin-right: 24px;
  }
  
  .team {
    display: flex;
    margin-bottom: 16px;
    cursor: pointer;
  }

  .team img {
    margin-right: 24px;
  }

  .team-info {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-right: 32px;
  }
</style>
