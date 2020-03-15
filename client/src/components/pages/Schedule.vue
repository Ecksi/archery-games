<template>
  <div class="schedule">
    <div>
      <h2>March 20</h2>
      <h3>Week 7</h3>
    </div>
    <hr />
    <div v-for="(time, index) in startTimes" :key="index">
      <match-info :startTime="time" />
    </div>
  </div>
</template>

<script>
  import MatchInfo from '@/components/atoms/MatchInfo';
  
  export default {
    name: 'Schedule',
    components: {
      MatchInfo
    },
    data: () => ({
      startTimes: ['6:30', '7:30', '8:30']
    })
  }
</script>

<style scoped>
  .schedule {
    margin: 16px;
  }

  h2, h3 {
    text-align: center;
  }

  hr {
    margin: 12px;
  }
</style>
