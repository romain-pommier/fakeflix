<template>
  <div>
    <FilmList v-bind:datasFilm="datas.results"/>
  </div>
</template>

<script>
// @ is an alias to /src
import FilmList from '@/components/FilmList.vue'
import getData from '@/mixins/fetchers.js'

export default {
  name: 'Home',
  data:function(){
    return{
      datas: null,
      baseRoute:"https://api.themoviedb.org/3/",
      apiKey:"?api_key=a0cad519d1cc21ef19d3f29bbc58c5d0&language=fr",
      moviesRoute:"discover/movie",
      filmRoute:"movie/475303",
      searchWord: null, 
    }
  },

  props:{
  },
// https://api.themoviedb.org/3/search/movie?api_key=a0cad519d1cc21ef19d3f29bbc58c5d0&language=en-US&query=termin
  mixins:[getData],
  created:function(){
    this.getData("https://api.themoviedb.org/3/"+this.moviesRoute+"?api_key=a0cad519d1cc21ef19d3f29bbc58c5d0&language=fr")
      .then(data => {
        this.datas = data
      }); 
  },
  methods:{
      getDataWithWord:function(){
      this.getData("https://api.themoviedb.org/3/search/movie?api_key=a0cad519d1cc21ef19d3f29bbc58c5d0&language=en-US&query=termin")
        .then(data => {
        this.datas = data
      }); 

      },
  },

  components: {
    FilmList
  }
}
</script>
