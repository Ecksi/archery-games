<template>
  <div>
    <section v-for="(menu, index) in menus" :key="index">
      <menu-option :asset="menu.img">{{ menu.text }}</menu-option>
    </section>
  </div>
</template>

<script>
  import MenuOption from '../atoms/MenuOption';
  
  export default {
    name: 'UserMenu',
    components: {
      MenuOption
    },
    data() {
      return {
        menus: [
          {'img': 'schedule', 'text': 'Schedule'},
          {'img': 'teams', 'text': 'Teams'},
          {'img': 'players', 'text': 'Players'},
          {'img': 'past-seasons', 'text': 'Past Seasons'},
          {'img': 'contact', 'text': 'Contact'}
        ]
      }
    }
  }
</script>
