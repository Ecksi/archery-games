<template>
  <div>
    <router-link to="/">
      <ag-header>Denver</ag-header>
    </router-link>
    <router-view />
  </div>
</template>

<script>
  import AgHeader from '@/components/atoms/Header';
  
  export default {
    name: 'App',
    components: {
      AgHeader
    }
  };
</script>

<style>
  :root {
    color: #111;
    font-size: 16px;
    font-family: 'Acme', Helvetica, sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
  }

  html, body {
    height: 100%;
  }

  body {
    box-sizing: border-box;
    background-color: #CCC;
  }
</style>
