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
        favorisFilms: null

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
        }
    }


})