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
    name: 'AdminMenu',
    components: {
      MenuOption
    },
    data() {
      return {
        menus: [
          {'img': 'start', 'text': 'Start a match'},
          {'img': 'schedule', 'text': 'Schedule'},
          {'img': 'teams', 'text': 'Teams'},
          {'img': 'players', 'text': 'Players'},
          {'img': 'past-seasons', 'text': 'Past Seasons'},
          {'img': 'team-builder', 'text': 'Team Builder'},
          {'img': 'contact', 'text': 'Contact'}
        ]
      }
    }
  }
</script>
