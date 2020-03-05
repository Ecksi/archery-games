<template>
  <main>
    <ag-menu :isAdmin="toggleAdmin" class="main" />
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
        toggleAdmin: false
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
