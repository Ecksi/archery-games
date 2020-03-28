<template>
  <main>
    <router-link :to="route">
      <ag-menu :isAdmin="toggleAdmin" @changeRoute="route=`/${$event}`" class="h-full my-0 mx-1" />
    </router-link>
    <button @click="toggleAdmin = !toggleAdmin" class="h12 w-48 ml-16">Admin Toggle</button>
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
