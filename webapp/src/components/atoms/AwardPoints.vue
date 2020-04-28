<script>
  export default {
    name: 'AwardPoints'
  };
</script>

<template>
  <div class="mt-4 text-center">
    <h2>Award Winner</h2>
    <section class="flex mt-6">
      <img class="my-0 mx-auto cursor-pointer" @click="$emit('awardWinner')" src="../../assets/img/winner.svg" alt="A gold medal" height="100" width="100">
    </section>
  </div>
</template>
