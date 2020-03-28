<template>
  <div class="my-0 mx-4">
    <header class="mb-6 text-center">
      <h1>Player Roster</h1>  
      <h3>April 2020 League</h3>
    </header>
    <section class="flex justify-center mb-4 cursor-pointer" v-for="(player, index) in players" :key="index" @click="$emit('playerPage', player.name)">
      <img class="mr-6" :src="require(`../../assets/avatars/avatar-${index}.svg`)" alt="" height="50">
        <h3 class="w-48">{{ player.name }}</h3>
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
