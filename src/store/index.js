import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    leagues: {
      currentSeason: {
        champion: 'Season in Progress',
        teams: [],
      },
      pastSeasons: []
    },
    players: [],
    match: {
      homeTeam: 'Knocked Out',
      homeScore: 0,
      awayTeam: 'Test team for long names',
      awayScore: 0,
      winner: '',
      duration: '0:03',
      isStarted: false,
      status: '',
      round: 1,
      gameList: ['Elimination', 'Jail Break', 'Headcount', 'Elimination - 2 Barr - Dodgeball', 'Jail Break', 'Elimination - 2 Barr', 'Headcount', 'Team Choice', 'Y.O.L.O.', 'Dog Eat Dog'],
    }
  },
  mutations: {
    nextGame(state) {
      state.match.round === state.match.gameList.length
        ? state.match.round = 1
        : state.match.round++;

      this.changeGame;
    },
    previousGame(state) {
      state.match.round === 1
        ? state.match.round = state.match.gameList.length
        : state.match.round--;

      this.changeGame;
    },
    changeGame(state) {
      state.match.gameList[state.match.round -1]
    },
    toggleMatch(state) {
      state.match.isStarted = !state.match.isStarted;

      state.match.isStarted 
        ? state.match.status = 'active'
        : state.match.status = 'paused';
    },
    runTimer(state) {
      let minutes = state.match.duration.split(':')[0];
      let seconds = state.match.duration.split(':')[1];

      if (seconds === '00') {        
        seconds = '59'
        minutes > 0 ? minutes-- : minutes
      } else {
        seconds--;
        if (seconds < 10) seconds = `0${seconds}`
      }

      return state.match.duration = `${minutes}:${seconds}`;
    },
    resetMatchState(state) {
      // Have a variable that contains the default start time
      state.match.duration = '4:00';
      state.match.isStarted = false;
      state.match.status = ''

      if (state.match.homeScore + state.match.awayScore == 9) {
        // What about triggering this call after dog eat dog? 
        // different modal perhaps? it will allow you to assign a dog eat dog winner, then reset game 
        this.resetGameState;
      }
    },
    resetGameState(state) {
      state.match.homeScore = 0;
      state.match.homeTeam = '';
      state.match.awayScore = 0;
      state.match.awayTeam = '';
      state.match.round = 1;
    },
    addPoint(state, team) {
      team.includes('home') ? state.match.homeScore++ : state.match.awayScore++;
    }
  },
  actions: {
    // Something buggy is going on with this timer when you pause/resume
    toggleTimer({ commit, state }) {
      commit('toggleMatch');

      setInterval(() => {
        return !state.match.isStarted || state.match.duration === '0:00'
          ? clearInterval()
          : commit('runTimer');
      }, 1000)
    }
  },
  modules: {
  }
})
