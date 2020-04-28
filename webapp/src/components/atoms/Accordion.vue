<script>
  export default {
    name: 'Accordian',
    data() {
      return {
        isOpen: false
      }
    }
  };
</script>

<template>
  <div class="border border-solid border-gray-500">
    <div class="flex justify-between p-4 cursor-pointer" @click="isOpen=!isOpen">
      <h2><slot name="headline" /></h2>
      <p v-if="isOpen">-</p>
      <p v-else>+</p>
    </div>
    <transition name="slide">
      <div 
        v-if="isOpen"
        class="px-4"
        :style="{
          display: isOpen ? 'block' : 'none',
          maxHeight: isOpen ? 'auto' : 0,
          paddingBottom: isOpen ? '16px' : 0
        }"
      >
        <span><slot name="content" /></span>
      </div>
    </transition>
  </div>
</template>

<style>
  .slide-enter-active {
    transition: all .4s ease-out;
  }

  .slide-leave-active {
    transition: all .3 ease-out;
  }

  .slide-enter, .slide-leave-to {
    transform: translateY(-10px);
    opacity: 0;
  }
</style>