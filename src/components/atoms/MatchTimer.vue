<template>
  <button class="start-button" @click="toggleTimer">
    <span v-if="!$store.state.match.isStarted && !$store.state.match.status">Start</span>
    <span v-else>{{ $store.state.match.status === 'active' ? `Pause - ${duration = $store.state.match.duration}` : `Resume - ${duration = $store.state.match.duration}` }}</span>
  </button>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    name: 'MatchTimer',
    data() {
      return {
        duration: this.$store.state.match.duration
      }
    },
    methods: { ...mapActions(['toggleTimer']) },
    watch: {
      duration: function() {
        return this.duration === '0:00' ? this.$emit('awardWinner') : 'hi'
      }
    }
  }
</script>

<style>
  .start-button {
    width: 100%;
    height: 70px;
    background-color: #009B4C;
    border: none;
    outline: none;
    font-size: 24px;
    font-weight: bold;
    color: #FFF;
    letter-spacing: 2px;
    cursor: pointer;
  }

  .start-button span {
    display: inline-block;
    width: 100%;
    filter: drop-shadow(0 2px 1px rgb(58, 58, 58));
  }
</style>
