<script>
  import { mapMutations } from 'vuex';

  export default {
    name: 'Modal',
    methods: { 
      ...mapMutations(['addPoint', 'nextGame', 'resetMatchState']),
      updateScore(team) {
        // How to break this up to be a bit cleaner?
        this.addPoint(team);
        setTimeout(() => this.$emit('close'), 300);
        this.resetMatchState();
        this.nextGame();
      }

    }
    // The purpose of this component is to send a point to the store
    // and trigger the event for either next match or end game


    // logic to consider
    // If homePoints + awayPoints === 9 => Game over man... game overr
    // If homePoints || awayPoints === 4 && totalPoints < 8 the team w/o 4 picks the game
    // After game - update league, send team points to db, reset state
  };
</script>

<template>
  <div class="modal absolute bg-white text-center border border-solid border-green-200">
    <div class="close relative cursor-pointer" @click="$emit('close')">X</div>
    <h1 class="my-3 mx-0">I am your Modal</h1>
    <h3>Who won this match?</h3>
    <div class="flex justify-center mt-4">
      <section class="mr-3 ml-2 border border-solid border-black cursor-pointer" @click="updateScore('home')">
        <h2>Home Team</h2>
        <img src="../../assets/avatars/avatar-11.svg" alt="" height="50">
      </section>
      <section class="mr-2 ml-3 border border-solid border-black cursor-pointer" @click="updateScore('away')">
        <h2>Away Team</h2>
        <img src="../../assets/avatars/avatar-13.svg" alt="" height="50">
      </section>
    </div>
  </div>  
</template>

<style scoped>
  .modal {
    top: 200px;
    left: calc((100vw - 250px) / 2);
    height: 300px;
    width: 250px;
  }

  .close {
    top: 8px;
    left: 112px;
  }
</style>
