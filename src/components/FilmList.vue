<template>
  <div class="row mt-5 ">
     <div class="col-md-4 mb-4" v-for="films in datasFilm" v-bind:key="films.id"   >
      <a v-bind:href="pathFilm+films.id">
        <img class="rounded mx-auto d-block" v-if="films.poster_path != null" v-bind:src="baseImg+films.poster_path" alt="">
        <img v-else v-bind:src="defaultImg" alt="">
        <h4 class="text-center">{{films.title}}</h4>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FilmFilst',
  props:{
    datasFilm:null
  },
  data:function(){
    return{
      baseImg:"https://image.tmdb.org/t/p/w300/",
      pathFilm:"/show/",
      defaultImg:"https://via.placeholder.com/300x450"
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
