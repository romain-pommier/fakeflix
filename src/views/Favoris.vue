<template>
  <div >
    <div  class=" float-right  mx-sm-auto  " style="width:200px">
      <h3 class="text-center">Autres films</h3>
    <Carousel v-if="defaultDatas != null" :datasCarousel="defaultDatas"></Carousel>
    </div>
    <FilmList v-if="favorisFilms != null" :datasFilm="favorisFilms"/>
  </div>
</template>
<script>
import Carousel from '../components/Carousel.vue'
import getData from '../mixins/fetchers.js'
import FilmList from '../components/FilmList.vue'

export default {
  name: 'Favoris',
  data:function(){
    return{
       defaultDatas: null,
    }
  },
  
  mixins:[getData],
  computed:{
    detailsAccount(){
      return this.$store.state.detailsAccount
    },
    session(){
      return this.$store.state.session
    },
    apiKey(){
       return this.$store.state.apiKey
    },
    favorisFilms(){
      return this.$store.state.favorisFilms
    }
  },
 
  created:function(){
    this.defaultDatas = this.getData("discover/movie","&sort_by=popularity.asc")
      .then(data => {
        this.defaultDatas = data.results
      });
    this.getFavorisMovies()
    
    
    
  },
  updated:function(){
  },
  methods:{
    getFavorisMovies: function(){
      fetch("https://api.themoviedb.org/3/account/"+ this.detailsAccount.id +"/favorite/movies?api_key="+ this.apiKey + "&session_id=" + this.session.session_id+ '&sort_by=created_at.asc')
      .then(response => response.json())
        .then(json => {
          this.$store.commit('setFavorisFilms', json.results ) 
          
      });
    },
    getIsFavorite: function(){
          
      }
    
  },
  components: {
    Carousel,
    FilmList
  }
}
</script>
