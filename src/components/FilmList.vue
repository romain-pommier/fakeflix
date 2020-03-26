<template>
    <div class=" d-flex flex-wrap  mt-5 ">
      <div class="container col-md-4 mb-4 col-sm-6" style="max-width:100%"  v-for="films in datasFilm.datas" v-bind:key="films.id"   >
        <router-link :to="{ name: 'Show', params: { id: films.id }}">
            <img class="rounded mx-auto d-block" v-if="films.poster_path != null" v-bind:src="baseImg+films.poster_path" alt="">
            <img class="rounded mx-auto d-block" v-else v-bind:src="defaultImg" alt="">
            <h4 class="text-center">{{films.title}}</h4>
        </router-link>
        <router-view ></router-view> 
      </div>
    </div>
</template>

<script>
export default {
  name: 'FilmFilst',
  props:{
    datasFilm:null,
  },
  data:function(){
    return{
      baseImg:"https://image.tmdb.org/t/p/w200",
      pathFilm:"/show/",
      defaultImg:"https://via.placeholder.com/200x300"
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
