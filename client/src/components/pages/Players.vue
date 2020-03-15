<template>
  <div class="players-page">
    <header>
      <h1>Player Roster</h1>  
      <h3>April 2020 League</h3>
    </header>
    <section v-for="(player, index) in players" :key="index" class="player" @click="$emit('playerPage', player.name)">
      <img :src="require(`../../assets/avatars/avatar-${index}.svg`)" alt="" height="50">
        <h3 class="player-name">{{ player.name }}</h3>
    </section>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: 'Players',
    computed: {
      ...mapState({
        players: (state) => state.players
      })
    }
  }
</script>

<style scoped>
  .players-page {
    margin: 0 16px; 
  }

  header {
    margin-bottom: 24px;
    text-align: center;
  }

  .table-points {
    margin-right: 24px;
  }
  
  .player {
    display: flex;
    justify-content: center;
    margin-bottom: 16px;
    cursor: pointer;
  }

  .player img {
    margin-right: 24px;
  }

  .player-name {
    width: 175px;
  }
</style>
