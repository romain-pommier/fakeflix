<template>
  <div >
    <div  class=" float-right  mx-sm-auto  " style="width:200px">
      <h3 class="text-center">Autres films</h3>
    <Carousel  :datasCarousel="defaultDatas"></Carousel>
    </div>
    <FilmList v-if="favorisFilms != null" :datasFilm="favorisFilms" />
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
       isFavoris: true,
    }
  },
  
  mixins:[getData],
  computed:{
    favorisFilms(){
      return this.$store.state.favorisFilms
    }
  },
  created:function(){
    this.defaultDatas = this.getData("discover/movie","&sort_by=popularity.asc")
      .then(data => {
        this.defaultDatas = data.results
      });
      this.$store.dispatch('getFavorisMovies')
  },
  components: {
    Carousel,
    FilmList
  }
}
</script>
