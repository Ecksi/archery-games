<template>
  <div class="modal">
    <div class="close" @click="$emit('close')">X</div>
    <h1>I am your Modal</h1>
    <h3>Who won this match?</h3>
    <div class="teams">
      <section class="home-team" @click="updateScore('home')">
        <h2>Home Team</h2>
        <img src="../../assets/avatars/avatar-11.svg" alt="" height="50">
      </section>
      <section class="away-team" @click="updateScore('away')">
        <h2>Away Team</h2>
        <img src="../../assets/avatars/avatar-13.svg" alt="" height="50">
      </section>
    </div>
  </div>  
</template>

<script>
  import { mapMutations } from 'vuex';

  export default {
    name: 'Modal',
    methods: { 
      ...mapMutations(['addPoint', 'nextGame', 'resetGameState']),
      updateScore(team) {
        // How to break this up to be a bit cleaner?
        this.addPoint(team);
        setTimeout(() => this.$emit('close'), 300);
        this.resetGameState();
        this.nextGame();
      }

    }
    // The purpose of this component is to send a point to the store
    // and trigger the event for either next match or end game


    // logic to consider
    // If homePoints + awayPoints === 9 => Game over man... game overr
    // If homePoints || awayPoints === 4 && totalPoints < 8 the team w/o 4 picks the game
    // After game - update league, send team points to db, reset state
  }
</script>

<style scoped>
  .modal {
    position: absolute;
    top: 200px;
    left: calc((100vw - 250px) / 2);
    height: 300px;
    width: 250px;
    border: 1px solid greenyellow;
    background-color: white;
    text-align: center;
  }

  .close {
    position: relative;
    top: 8px;
    left: 112px;
    cursor: pointer;
  }
  
  h1 {
    margin: 12px 0;
  }

  .teams {
    display: flex;
    justify-content: center;
    margin-top: 16px;
  }

  .home-team, .away-team {
    cursor: pointer;
    border: 1px solid black;
  }

  .home-team {
    margin-right: 12px;
    margin-left: 8px;
  }

  .away-team {
    margin-left: 12px;
    margin-right: 8px;
  }
</style>
