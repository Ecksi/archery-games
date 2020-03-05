<template>
  <div>
    <section v-for="(menu, index) in isAdmin ? admin : user" :key="index">
      <menu-option :asset="menu.img">{{ menu.text }}</menu-option>
    </section>
  </div>
</template>

<script>
  import MenuOption from '../atoms/MenuOption';
  
  export default {
    name: 'Menu',
    components: {
      MenuOption
    },
    props: {
      isAdmin: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        admin: [
          {'img': 'start', 'text': 'Start a match'},
          {'img': 'schedule', 'text': 'Schedule'},
          {'img': 'teams', 'text': 'Teams'},
          {'img': 'players', 'text': 'Players'},
          {'img': 'past-seasons', 'text': 'Past Seasons'},
          {'img': 'team-builder', 'text': 'Team Builder'},
          {'img': 'contact', 'text': 'Contact'}
        ],
        user: [
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
