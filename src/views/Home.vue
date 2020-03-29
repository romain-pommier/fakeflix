<template>
  <div>
    <div v-if='this.searchWord != null'>
      <div  class=" float-right  mx-sm-auto  " style="width:200px">
        <h3 class="text-center">A la une.</h3>
      <Carousel v-if="defaultDatas != null" :datasCarousel="defaultDatas"></Carousel>
      </div>
      <div  v-if="searchWord != null" class=" mt-5" >
        <FilmList :datasFilm ="datas"  />
      </div>

    </div>
    <div v-else class="mt-5">
      <h3  class=" mx-auto text-center">Bienvenue sur FakeFlix </h3>
      <div  class=" float-right  mx-sm-auto  " style="width:200px">
        <h3 class="text-center">A la une.</h3>
      <Carousel v-if="defaultDatas != null" :datasCarousel="defaultDatas"></Carousel>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from '../components/Carousel.vue'
import FilmList from '../components/FilmList.vue'
import getData from '../mixins/fetchers.js'

export default {
  name: 'Home',
  data:function(){
    return{
      defaultDatas: null,
      datas:null,
      sessionId: null
    }
  },
  props:{
    searchWord: null
  },
  mixins:[getData],
  created:function(){
    this.defaultDatas = this.getData("discover/movie","")
      .then(data => {
        this.defaultDatas = data.results
      });
      this.getDataWithWord()
  },
  watch: {
    searchWord:function(){
      this.getDataWithWord()
    }
  },
  methods:{
      getDataWithWord:function(){
        this.getData("search/movie", "&query=" + this.searchWord)
          .then(data => {
            this.datas = data.results
        }); 
      },
  },
  components: {
    FilmList,
    Carousel 
  }
}
</script>
<style >
.movie-enter-active, .movie-leave-active {
  transition: opacity .5s;
}
.movie-enter, .movie-leave-to  {
  opacity: 0;
}
</style>
