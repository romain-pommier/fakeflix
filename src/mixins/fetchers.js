export default {
    methods: {
        getData: async function(mode, query) {
            let apiKey = "a0cad519d1cc21ef19d3f29bbc58c5d0"
            let response = await fetch("https://api.themoviedb.org/3/" + mode + "?api_key=" + apiKey + "&language=fr" + query);
            let data = await response.json()
            return data;
        },

        post: function() {}
    }

}