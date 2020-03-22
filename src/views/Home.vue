<template>
  <div>
    <FilmList v-bind:datasFilm="datas.results"/>
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
    searchWordProps: ""
  },

  mixins:[getData],
  created:function(){
    this.datas = this.getData("discover/movie")
      .then(data => {
        this.datas = data
      });
    
  
  },
  updated:function(){
  },
  methods:{
      getDataWithWord:function(){
      this.getData("search/movie"+this.searchWord)
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
