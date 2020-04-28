<script>
  import TeamScore from '@/components/atoms/TeamScore';
  import AwardPoints from  '@/components/atoms/AwardPoints';
  import GameList from '@/components/atoms/GameList';
  import MatchTimer from '@/components/atoms/MatchTimer';
  import Modal from '@/components/atoms/Modal';

  export default {
    name: 'StartMatch',
    components: { 
      TeamScore,
      AwardPoints,
      GameList,
      MatchTimer,
      Modal
    },
    data() {
      return {
        popUp: false,
      }
    }
  };
</script>

<template>
  <div class="start flex flex-col justify-between">
    <modal v-if="popUp" @close="popUp=false"/>
    <team-score class="flex-1" />
    <award-points class="flex-1" @awardWinner="popUp=true" />
    <game-list class="flex-1 translate-y" />
    <match-timer @awardWinner="popUp=true" />
  </div>
</template>

<style>
  .start {
    height: calc(100vh - 129px);
  }

  .translate-y {
    /* Disable this for iPhone 5/SE */
    transform: translateY(35%);
  }
</style>
