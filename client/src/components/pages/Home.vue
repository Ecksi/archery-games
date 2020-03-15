<template>
  <main>
    <router-link :to="route">
      <ag-menu :isAdmin="toggleAdmin" @changeRoute="route=`/${$event}`" class="main" />
    </router-link>
    <button @click="toggleAdmin = !toggleAdmin" class="toggle">Admin Toggle</button>
  </main>
</template>

<script>
  import AgMenu from '@/components/molecules/Menu';

  export default {
    name: 'Home',
    components: { AgMenu },
    data() {
      return {
        toggleAdmin: true,
        route: ''
      }
    }
  };
</script>

<style scoped>
  .main {
    height: 100%;
    margin: 0.25rem;
  }

  .toggle {
    margin-left: 4rem;
    height: 50px;
    width: 200px;
  }
</style>
