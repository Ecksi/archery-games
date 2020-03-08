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
      awayScore: 3,
      matchDuration: '4:00',
      round: 1,
      gameList: ['Elimination', 'Jail Break', 'Headcount', 'Elimination - 2 Barr - Dodgeball', 'Jail Break', 'Elimination - 2 Barr', 'Headcount', 'Team Choice', 'Y.O.L.O.', 'Dog Eat Dog']
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
    }
  },
  actions: {
  },
  modules: {
  }
})
