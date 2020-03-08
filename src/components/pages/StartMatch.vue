<template>
  <div class="start">
    <team-score class="flex-one" />
    <award-points class="flex-one" />
    <game-list class="flex-one translate-y" />
    <match-timer />
  </div>
</template>

<script>
  import TeamScore from '@/components/atoms/TeamScore';
  import AwardPoints from  '@/components/atoms/AwardPoints';
  import GameList from '@/components/atoms/GameList';
  import MatchTimer from '@/components/atoms/MatchTimer'

  export default {
    name: 'StartMatch',
    components: { 
      TeamScore,
      AwardPoints,
      GameList,
      MatchTimer
    }
  }
</script>

<style>
  .start {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100vh - 129px);
  }

  .flex-one {
    flex: 1;
  }

  .translate-y {
    /* Disable this for iPhone 5/SE */
    transform: translateY(35%);
  }
</style>
