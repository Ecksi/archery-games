<template>
  <div>
    <h3 class="round" v-if="$store.state.match.round === 10">- Bonus Round -</h3>
    <h3 class="round" v-else>- Round {{ $store.state.match.round }} -</h3>
    <div class="game-list">
      <span class="arrow" @click="previousGame">&lt;</span>
        <h2 class="current-game">{{ $store.state.match.gameList[$store.state.match.round - 1] }}</h2>
      <span class="arrow" @click="nextGame">&gt;</span>
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
  .round {
    margin-bottom: 16px;
    text-align: center;
  }

  .game-list {
    display: flex;
    margin: 0 16px;
    justify-content: space-around;
  }

  .arrow {
    font-size: 32px;
    cursor: pointer;
  }

  .current-game {
    padding-top: 8px;
    width: 80vw;
    text-align: center;
  }
</style>
