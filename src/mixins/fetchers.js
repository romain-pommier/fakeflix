export default {
    computed: {
        apiKey() {
            return this.$store.state.apiKey
        },
    },
    methods: {
        getData: async function(mode, query) {
            let response = await fetch("https://api.themoviedb.org/3/" + mode + "?api_key=" + this.apiKey + "&language=fr" + query);
            let data = await response.json()
            return data;
        },

        post: function() {}
    }

}