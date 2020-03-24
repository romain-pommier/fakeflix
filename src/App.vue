<template>
  <div class="container">
    <img class=" rounded mx-auto d-block mt-5 mb-5 " src="../src/assets/title.png">
      <div class="d-flex justify-content-start pl-5" id="nav">
        <router-link class="mr-5" :to="{name: 'Home'}">Accueil</router-link>
        <router-link class="mr-5" :to="{name: 'Favoris'}">Favoris</router-link>
        <router-link class="mr-5" :to="{name: 'MovieToSee'}">Films à voir</router-link>
        <form class=" d-flex ml-auto" @submit="submit" >
          <input placeholder="Recherche"  v-model="searchWord" class="form-control"  style="border-radius: 3px 0 0 3px">
          <button type="submit" style="border-radius: 0 3px 3px 0 "    class="btn btn-primary" >Rechercher</button>
        </form>
      </div>
      <router-view v-bind:formObjectProps="formObject" />
  </div>  
</template>
<script>

export default {
  name: 'App',
  data:function(){
    return{
     searchWord: null,
     formObject:{
       value: null,
       status: false
     },
    }
  },                                            
  created:function(){
  },
  methods:{
    submit:function(){
      event.preventDefault()
      this.formObject = new Object
      this.formObject.value = this.searchWord != "" ? this.searchWord : null
      
      this.formObject.status = true
    }
  },
  mounted:function(){
  }
}
</script>


<style>
*{
  color: white;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}
h1{
  color:red;
  text-transform: capitalize;
  font-size: 100px
}

#nav {
  padding: 30px;
  background-color: #333940;
}

#nav a {
  font-weight: bold;
  color: white;
}

#nav a.router-link-exact-active {
  color: red;
}
</style>
