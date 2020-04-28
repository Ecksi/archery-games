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
  };
</script>

<template>
  <div class="m-4">
    <div class="text-center">
      <h2>March 20</h2>
      <h3>Week 7</h3>
    </div>
    <hr class="m-3" />
    <div v-for="(time, index) in startTimes" :key="index">
      <match-info :startTime="time" />
    </div>
  </div>
</template>
