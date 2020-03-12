<template>
  <div class="modal">
    <div class="close" @click="$emit('close')">X</div>
    <h1>I am your Modal</h1>
    <h3>Who won this match?</h3>
    <section>
      <h2>Home Team</h2>
      <h2>Away Team</h2>
    </section>
    <img src="../../assets/avatars/avatar-13.svg" alt="" height="50">
  </div>  
</template>

<script>
  export default {
    name: 'Modal'
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
    cursor: pointer;
  }
</style>
