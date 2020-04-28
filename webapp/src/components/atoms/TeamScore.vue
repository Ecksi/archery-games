<script>
  export default {
    name: 'TeamScore'
  };
</script>

<template>
  <div class="flex justify-around py-0 px-4 text-center">
    <section class="w-full pr-4">
      <!-- limit chars to 24 -->
      <h1 :class="['h-16', {'center-name': $store.state.match.homeTeam.length < 12}]">{{ $store.state.match.homeTeam  }}</h1>
      <span class="score inline-block mt-4 mx-auto mb-0 w-10 border border-solid border-gray-600">{{ $store.state.match.homeScore }}</span>
    </section>
    <section class="w-full pl-4">
      <!-- limit chars to 24 -->
      <h1 :class="['h-16', {'center-name': $store.state.match.awayTeam.length < 12}]">{{ $store.state.match.awayTeam  }}</h1>
      <span class="score inline-block mt-4 mx-auto mb-0 w-10 border border-solid border-gray-600">{{ $store.state.match.awayScore }}</span>
    </section>
  </div>
</template>

<style scoped>
  .center-name {
    line-height: 50px;
  }

  .score {
    height: 50px;
    border-radius: 25%;
    font-size: 32px;
    line-height: 50px;
    box-shadow: 2px 2px rgba(102, 102, 102, 0.3);
  }
</style>