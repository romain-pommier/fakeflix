<template>
  <div class="row mt-5 ">
     <div class="col-md-4 mb-4" v-for="films in datasFilm" v-bind:key="films.id"  >
      <a v-bind:href="pathFilm+films.id">
        <img class="rounded mx-auto d-block" v-bind:src="baseImg+films.poster_path" alt="">
        <h4 class="text-center">{{films.title}}</h4>
      </a>
    </div>
  </div>
</template>

<script>
// // // // https://api.themoviedb.org/3/movie/475303?api_key=a0cad519d1cc21ef19d3f29bbc58c5d0&language=fr-FR
export default {
  name: 'FilmFilst',
  props:{
    datasFilm:null
  },
  data:function(){
    return{
      baseImg:"https://image.tmdb.org/t/p/w300",
      pathFilm:"/show/"
    } 
  },
  components:{
  },
  created:function(){
  },
}
</script>

<style scoped>


</style>
