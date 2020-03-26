import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        todos: [
            { id: "0", title: 'titre 0', completed: 0 },
            { id: "1", title: 'titre 1', completed: 1 },
            { id: "2", title: 'titre 2', completed: 2 },
            { id: "3", title: 'titre 3', completed: 3 },
        ]
    }
})