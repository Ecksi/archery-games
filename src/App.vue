<template>
  <div>
    <ag-header>Denver</ag-header>
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

  html {
    height: 100%;
  }

  body {
    box-sizing: border-box;
    background-color: #CCC;
  }
</style>
