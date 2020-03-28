<template>
  <button class="start-button w-full text-white text-2xl font-bold border-none cursor-pointer outline-none" @click="toggleTimer">
    <span class="w-full inline-block" v-if="!$store.state.match.isStarted && !$store.state.match.status">Start</span>
    <span class="w-full inline-block" v-else>{{ $store.state.match.status === 'active' ? `Pause - ${duration = $store.state.match.duration}` : `Resume - ${duration = $store.state.match.duration}` }}</span>
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

<style scoped>
  .start-button {
    height: 70px;
    background-color: #009B4C;
    letter-spacing: 2px;
  }

  .start-button span {
    filter: drop-shadow(0 2px 1px rgb(58, 58, 58));
  }
</style>
