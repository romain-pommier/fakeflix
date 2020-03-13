<template>
  <div >
    <MovieToSeeList/>
  </div>
</template>

<script>
// @ is an alias to /src
import MovieToSeeList from '@/components/MovieToSeeList.vue'

export default {
  name: 'MovieToSee',
  components: {
    MovieToSeeList
  }
}
</script>
