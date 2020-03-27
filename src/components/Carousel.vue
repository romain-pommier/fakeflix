<template>
   <div v-if="datasCarousel != null" id="carouselExampleControls" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
        <div v-for="(data, index) in datasCarousel" v-bind:key="data.id" :class="{ 'active': index === 0 }" class="carousel-item ">
            <router-link :to="{ name: 'Show', params: { id: data.id }}">
                <img class=" rounded mx-auto d-block" v-if="data.poster_path != null" v-bind:src="baseImg+data.poster_path" alt="">
                <img v-else v-bind:src="defaultImg" alt="" >
            </router-link>
            <router-view></router-view>
        </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
    </a>
    </div>
</template>
<script>
export default {
  name: 'Carousel',
  props:{
    datasCarousel:null
  },
  data:function(){
    return{
        baseImg:"https://image.tmdb.org/t/p/w200",
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
