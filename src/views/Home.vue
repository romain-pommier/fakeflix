<template>
  <div>
    <div class="float-right  mx-sm-auto mr-md-5 " style="width:250px">
      <h3 class="text-center">A la une.</h3>
     <Carousel class="" v-bind:datasCarousel="defaultDatas"></Carousel>
    </div>
    <div class=" mt-5" >
      <FilmList v-bind:datasFilm="datas" v-bind:formObject="formObjectProps.value"/>
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
      datas:null
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
    if(this.formObjectProps.status == true && this.formObjectProps.value != null  ){
      this.getDataWithWord("&query=" + this.formObjectProps.value)
      this.formObjectProps.status = false
    }
  },
  methods:{
      getDataWithWord:function(query){
        this.getData("search/movie", query)
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
