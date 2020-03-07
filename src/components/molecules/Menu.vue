<template>
  <div>
    <section v-for="(menu, index) in isAdmin ? admin : user" :key="index" @click="$emit('changeRoute', menu.route)">
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
          {'img': 'start', 'text': 'Start a match', 'route': 'start'},
          {'img': 'schedule', 'text': 'Schedule', 'route': 'schedule'},
          {'img': 'teams', 'text': 'Teams', 'route': 'teams'},
          {'img': 'players', 'text': 'Players', 'route': 'players'},
          {'img': 'past-seasons', 'text': 'Past Seasons', 'route': 'league'},
          {'img': 'team-builder', 'text': 'Team Builder', 'route': 'team-builder'},
          {'img': 'contact', 'text': 'Contact', 'route': 'contact'}
        ],
        user: [
          {'img': 'schedule', 'text': 'Schedule', 'route': 'schedule'},
          {'img': 'teams', 'text': 'Teams', 'route': 'teams'},
          {'img': 'players', 'text': 'Players', 'route': 'players'},
          {'img': 'past-seasons', 'text': 'Past Seasons', 'route': 'league'},
          {'img': 'contact', 'text': 'Contact', 'route': 'contact'}
        ]
      }
    }
  }
</script>
