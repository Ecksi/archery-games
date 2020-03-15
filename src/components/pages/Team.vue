<template>
  <div class="team">
    <h1>{{ team.name }}</h1>
    <h3>Color: {{ team.color }}</h3>

    Players:
    <section v-for="(member, index) in team.members" :key="index">
      <span>{{ member.name }}</span>
      <img v-if="member.captain" src="../../assets/img/captain.png" alt="" height="15" class="captain">
    </section>
  </div>
</template>

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
  }
</script>

<style scoped>
  .team {
    margin: 0 16px;
  }

  .captain {
    margin-left: 12px;
  }
</style>
