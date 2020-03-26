<template>
  <div class="mx-auto mt-5" style="width:30%">
      <h2>Veuillez vous identifier</h2>
      <form action="">
        <div class="form-group">
        <input class="form-control" v-model="username" type="text" placeholder="Nom d'utilisateur" required>
      </div>
      <div class="form-group">
        <input class="form-control" v-model="password" type="password" placeholder="Mot de passe" required>
      </div>
      <div class="form-group">
        <button class="btn btn-primary form-control" @click="login">Connecter</button>
      </div>
      </form>
  </div>
</template>
<script>

import getData from '../mixins/fetchers.js'

export default {
  name: 'Login',
  data:function(){
    return{
      username: null,
      password: null,
      authenticationData: null,
      userToken:null,
      userSession: null
    }
  },
  created:function(){
    this.getAuthenticationToken()
  },
  updated:function(){
   
    
  },
  methods:{
    login:function(){
      event.preventDefault()
      this.getUserToken()
      if(this.userToken.request_token ){
        console.log('here')
        this.getUserSession()
      }
      
      
      if(this.userSession.success ){
       this.$parent.session = true
      }
    },

    getAuthenticationToken: function(){
      let apiKey = "a0cad519d1cc21ef19d3f29bbc58c5d0"
      fetch("https://api.themoviedb.org/3/authentication/token/new?api_key="+ apiKey)
                .then(response => response.json())
                .then(json => {
                    this.authenticationData = json;
                });
    },
    getUserToken: function(){
      let apiKey = "a0cad519d1cc21ef19d3f29bbc58c5d0"
      fetch("https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key="+ apiKey,{
        headers: {
          "Content-Type": "application/json"
        },
        method:"POST",
        body:JSON.stringify({
          "username": this.username ,
          "password": this.password ,
          "request_token": this.authenticationData.request_token
        }),
      })
      .then(response => response.json())
        .then(json => {
          this.userToken = json;
      });
    },
    getUserSession: function(){
      console.log(this.userToken.request_token)
      let apiKey = "a0cad519d1cc21ef19d3f29bbc58c5d0"
      fetch("https://api.themoviedb.org/3/authentication/session/new?api_key="+ apiKey,{
        headers: {
          "Content-Type": "application/json"
        },
        method:"POST",
        body:JSON.stringify({
          "request_token": this.userToken.request_token
        }),
      })
      .then(response => response.json())
        .then(json => {
          this.userSession = json;
          console.log(json)
      });
    },
  }
  
}
</script>
