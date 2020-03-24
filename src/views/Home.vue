<template>
  <div>
    <FilmList v-bind:datasFilm="datas.results"/>
    <p>{{formObjectProps.value}}</p>
  </div>
</template>

<script>
import FilmList from '../components/FilmList.vue'
import getData from '../mixins/fetchers.js'

export default {
  name: 'Home',
  data:function(){
    return{
      datas: null,
    }
  },
  props:{
    formObjectProps: null
  },
  mixins:[getData],
  created:function(){
    this.datas = this.getData("discover/movie","")
      .then(data => {
        this.datas = data
      });
  },
  updated:function(){
    if(this.formObjectProps.status != false && this.formObjectProps.value != ""){
      this.getDataWithWord("&query=" + this.formObjectProps.value)
      this.formObjectProps.status = false
      console.log('up')
    }
  },
  methods:{
      getDataWithWord:function(query){
        this.getData("search/movie", query)
          .then(data => {
            this.datas = data
        }); 
      },
      getDefaultData:function(){
        this.getData("discover/movie","")
          .then(data => {
            this.datas = data
        });
      }
  },
  components: {
    FilmList
  }
}
</script>
