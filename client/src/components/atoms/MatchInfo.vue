<template>
  <div>
    <h2 class="text-center text-4xl">{{ startTime }}</h2>
    <section class="flex justify-center my-4 mx-0 text-center">
      <h2 class="w-32 h-full p-6 text-3xl leading-none cursor-pointer border-solid border-2 border-red-300">{{ homeTeam }}</h2>
      <img class="my-auto mx-4" src="../../assets/img/versus.png" alt="" height=50 width=50>
      <h2 class="w-32 h-full p-6 text-3xl leading-none cursor-pointer border-solid border-2 border-blue-500">{{ awayTeam }}</h2>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'MatchInfo',
    props: {
      startTime: {
        type: String,
        default: '2:30'
      },
      homeTeam: {
        type: String,
        default: 'Home Team'
      },
      awayTeam :{
        type: String,
        default: 'Away Team'
      }
    }
  }
</script>

<style scoped>
  /* pull team color, create gradient off that */
  .bg-color {
    background-color: rgba(135, 206, 250, 0.5);
  }
</style>
