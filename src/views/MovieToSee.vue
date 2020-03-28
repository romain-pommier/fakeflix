<template>
  <div >
    <div  class=" float-right  mx-sm-auto  " style="width:200px">
      <h3 class="text-center">Autres films</h3>
    <Carousel v-if="defaultDatas != null" :datasCarousel="defaultDatas"></Carousel>
    </div>
    <FilmList v-if="watchList != null" :datasFilm="watchList"/>
  
  </div>
</template>
<script>
import Carousel from '../components/Carousel.vue'
import getData from '../mixins/fetchers.js'
import FilmList from '../components/FilmList.vue'

export default {
  name: 'watchList',
  data:function(){
    return{
       defaultDatas: null,
    }
  },
  mixins:[getData],
  computed:{
    watchList(){
      return this.$store.state.watchList
    }
  },
 
  created:function(){
    this.defaultDatas = this.getData("discover/movie","&sort_by=release_date.asc")
      .then(data => {
        this.defaultDatas = data.results
      });
      this.$store.dispatch('getWatchList')
  },
  components: {
    Carousel,
    FilmList
  }
}
</script>