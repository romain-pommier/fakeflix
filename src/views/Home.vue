<template>
  <div >
    <FilmList v-bind:datasFilm="datas" v-bind:formObject="formObjectProps.value"/>
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
        this.datas = data.results
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
    FilmList
  }
}
</script>
