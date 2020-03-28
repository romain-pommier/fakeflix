import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        apiKey: 'a0cad519d1cc21ef19d3f29bbc58c5d0',
        authenticationData: null,
        userData: null,
        session: null,
        detailsAccount: null,
        favorisFilms: null,
        watchList: null,
        access: false

    },
    mutations: {
        setAuthenticationData(state, authenticationData) {
            return state.authenticationData = authenticationData
        },
        setUserData(state, userData) {
            return state.userData = userData
        },
        setSession(state, session) {
            return state.session = session
        },
        setDetailsAccount(state, detailsAccount) {
            return state.detailsAccount = detailsAccount
        },
        setFavorisFilms(state, favorisFilms) {
            return state.favorisFilms = favorisFilms
        },
        setWatchList(state, watchList) {
            return state.watchList = watchList
        },
        setAccess(state, access) {
            return state.access = access
        }
    },
    actions: {
        getFavorisMovies(context) {
            fetch("https://api.themoviedb.org/3/account/" + context.state.detailsAccount.id + "/favorite/movies?api_key=" + context.state.apiKey + "&session_id=" + context.state.session.session_id + '&sort_by=created_at.asc')
                .then(response => response.json())
                .then(json => {
                    context.state.favorisFilms = json.results

                });
        },

        getWatchList: function(context) {
            fetch("https://api.themoviedb.org/3/account/" + context.state.detailsAccount.id + "/watchlist/movies?api_key=" + context.state.apiKey + "&session_id=" + context.state.session.session_id + '&sort_by=created_at.asc')
                .then(response => response.json())
                .then(json => {
                    context.state.watchList = json.results

                });
        },

    }
})