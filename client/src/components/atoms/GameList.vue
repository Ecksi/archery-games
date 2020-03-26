<template>
  <div>
    <h3 class="mb-4 text-center" v-if="$store.state.match.round === 10">- Bonus Round -</h3>
    <h3 class="mb-4 text-center" v-else>- Round {{ $store.state.match.round }} -</h3>
    <div class="flex justify-around my-0 mx-4">
      <span class="cursor-pointer text-4xl" @click="previousGame">&lt;</span>
        <h2 class="current-game pt-2 text-center">{{ $store.state.match.gameList[$store.state.match.round - 1] }}</h2>
      <span class="cursor-pointer text-4xl" @click="nextGame">&gt;</span>
    </div>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex';

  export default {
    name: 'GameList',
    methods: {
      ...mapMutations(['nextGame', 'previousGame'])
    }
  }
</script>

<style scoped>
  .current-game {
    width: 80vw;
  }
</style>
