<script>
  export default {
    name: 'Team',
    props: {
      team: {
        type: Object,
        defaut: {},
        required: true
      }
    }
  };
</script>

<template>
  <div class="my-0 mx-4">
    <h1>{{ team.name }}</h1>
    <h3>Color: {{ team.color }}</h3>
    <h3>Players:</h3>
    <section v-for="(member, index) in team.members" :key="index">
      <span>{{ member.name }}</span>
      <img v-if="member.captain"  class="ml-3 h-4" src="../../assets/img/captain.png" alt="A captains badge">
    </section>
  </div>
</template>
