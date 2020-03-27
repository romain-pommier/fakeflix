<template>
 <div class="mt-5 mb-5 container" v-if="dataFilm != null">
   <div class="embed-responsive embed-responsive-16by9 mb-5" v-if="this.baFilmKey != null">
    <iframe  class="embed-responsive-item" width="160%" height="315" :src="this.youtubeUrl+this.baFilmKey" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
   </div>
   <div v-else>
      <p>Video d'annonce non disponible</p>
   </div>
   <div class="row">
    <img  class="col-md-4" v-if="posterFilm != null" :src="baseImg+posterFilm" alt="">
    <img  class="col-md-4" v-else :src="this.defaultImg" alt="">
    
    <div class="col-md-8">
      <h2>{{ dataFilm.title }}</h2>
      <h6>{{ littleTitle }}</h6>
      <p class="mt-5">{{ dataFilm.overview }}</p>
      <h3 class="mt-5" >Information:</h3>
      <ul>
        <li>Popularité: {{ dataFilm.popularity }}</li>
        <li>Vote: {{ vote }} </li>
        <li>Nombre de votes: {{ dataFilm.vote_count }}</li>
      </ul>
    </div>
   </div>
   <div class=" mt-5 d-flex justify-content-between"> 
     <button class="btn btn-success" >Ajouter aux favoris</button>
     <button class="btn btn-success">Ajouter à la liste "A voir"</button>
   </div>
 </div>
</template>

<script>
  import getData from '../mixins/fetchers.js'
  export default {
    name: 'ShowFilm',
    props:{
    },
    data:function(){
      return{
        dataFilm: null,
        movieId: this.$route.params.id,
        baseImg:"https://image.tmdb.org/t/p/w300",
        posterFilm: null,
        baFilmKey: null,
        youtubeUrl: "https://www.youtube.com/embed/",
        defaultImg:"https://via.placeholder.com/300x450"
      }
    },
    
    computed: {
      littleTitle: function(){
          return this.dataFilm.title+" langue: (" + this.dataFilm.original_language+")"+ " -Sortie- " +this.dataFilm.release_date
      },
      vote:function(){
        return this.dataFilm.vote_average+"/10"
      }  
    },
    mixins:[getData],
    created:function(){
      this.datas = this.getData("movie/"+this.movieId)
        .then(data => {
          this.dataFilm = data
          this.posterFilm = this.dataFilm.poster_path
        })

      this.datas = this.getData("movie/"+this.movieId+"/videos")
        .then(data => {
          if(data.results.length > 0){
          this.baFilmKey = data.results[0].key
          }
          else{
            this.baFilmKey = null
          }
        })
    },
    methods:{
    }
  }
</script>
<style scoped>


</style>
