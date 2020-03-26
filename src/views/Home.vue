<template>
<div>
  <div  v-if="formObjectProps.value != null">
    <div class=" float-right  mx-sm-auto  " style="width:200px">
      <h3 class="text-center">A la une.</h3>
     <Carousel  v-bind:datasCarousel="defaultDatas"></Carousel>
    </div>
    <div class=" mt-5" >
      <FilmList v-bind:datasFilm="{datas: datas, searchWord: formObjectProps.value}" />
    </div>
  </div>
  <div  class="mt-5">
    <h3  class=" mx-auto text-center">Bienvenue sur FakeFlix </h3>
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
      requestStatus:false
    }
  },
  props:{
    formObjectProps: null
  },
  mixins:[getData],
  created:function(){
    this.defaultDatas = this.getData("discover/movie","")
      .then(data => {
        this.defaultDatas = data.results
      });  
  },
  updated:function(){
    if(this.requestStatus == false){
      this.getDataWithWord(this.formObjectProps.value)
      this.requestStatus = true
    }
    
  },
  methods:{
      getDataWithWord:function(query){
        this.getData("search/movie", "&query=" + query)
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
