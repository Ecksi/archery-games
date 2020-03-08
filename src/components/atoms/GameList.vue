<template>
  <div>
    <h3 class="round">- Round {{ $store.state.match.round }} -</h3>
    <div class="game-list">
      <span class="arrow" @click="getPreviousGame">&lt;</span>
        <h2 class="current-game">{{ $store.state.match.gameList[3] }}</h2>
      <span class="arrow" @click="getNextGame">&gt;</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Paginate',
    methods: {
      getNextGame() {
        console.log('next Game')
      },
      getPreviousGame() {
        console.log('previous game')
      }
    }
  }
</script>

<style>
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
    text-align: center;
  }
</style>
