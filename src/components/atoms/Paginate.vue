<template>
  <div class="paginate">
    <span class="arrow">&lt;</span>
      <h1 ckass="slot-content"><slot></slot></h1>
    <span class="arrow">&gt;</span>
  </div>
</template>

<script>
  export default {
    name: 'Paginate'
  }
</script>

<style>
  .paginate {
    display: flex;
    width: 100%;
    justify-content: space-around;
  }

  .arrow {
    font-size: 32px;
    cursor: pointer;
  }

  .slot-content {
    padding-top: 4px;
  }
</style>
