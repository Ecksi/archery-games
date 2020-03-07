<template>
  <div>
    <h1><slot></slot></h1>
    <span class="score">{{ teamScore }}</span>
  </div>
</template>

<script>
  export default {
    name: 'TeamScore',
    props: {
      teamScore: {
        type: Number,
        required: false,
        default: 0
      }
    }
  }
</script>

<style scoped>
  div {
    padding: 0 16px;
    text-align: center;
  }

  h1 {
    height: 60px;
  }

  .score {
    display: inline-block;
    margin: 16px auto 0 auto;
    height: 50px;
    width: 40px;
    border: 1px solid #666;
    border-radius: 25%;
    font-size: 32px;
    line-height: 50px;
    box-shadow: 2px 2px rgba(102, 102, 102, 0.3);
  }
</style>