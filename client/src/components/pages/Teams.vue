<template>
  <div class="my-0 mx-4">
    <header class="mb-6">
      <h1>Team Roster</h1>  
      <h3>April 2020 League</h3>
    </header>
    <section class="flex justify-between mb-3">
      <h3 class="table-teams">Team</h3>
      <h3 class="mr-6">Points</h3>
    </section>
    <section v-for="(team, index) in teams" :key="index">
      <router-link :to="{ name: 'Team', params: {team: team}}" class="flex mb-4 cursor-pointer text-black no-underline">
        <img class="mr-6" :src="require(`../../assets/avatars/avatar-${index}.svg`)" alt="A random avatar image" height="50">
        <section class="flex justify-between w-full mr-8">
          <div>
            <h3>{{ team.name }}</h3>
            <h4>{{ team.color }}</h4>
          </div>
          <div>
            <h3>{{ team.points }}</h3>  
          </div>
        </section>
      </router-link>
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
  .table-teams {
    margin-left: 72px;
  }
  
  .team:hover {
    background-color: rgba(115, 115, 115, 0.3);
  }
</style>
