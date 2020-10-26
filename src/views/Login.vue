<template>
  <div class="mx-auto mt-5" style="width:30%">
    <h2>Veuillez vous identifier</h2>

    <p>UserName: romain-p31</p>
    <p>Password: 123456</p>
    <div class="form-group">
      <input
        class="form-control"
        v-model="username"
        type="text"
        placeholder="Nom d'utilisateur"
        required
      />
    </div>
    <div class="form-group">
      <input
        class="form-control"
        v-model="password"
        @keyup.enter="getUserToken"
        type="password"
        placeholder="Mot de passe"
        required
      />
    </div>
    <div class="form-group">
      <button class="btn btn-primary form-control" @click="getUserToken">
        Connecter
      </button>
    </div>
    <div v-if="loginFalse == true" class="alert alert-danger" role="alert">
      Les identifiants ne sont pas correct
    </div>
  </div>
</template>
<script>
import getData from "../mixins/fetchers.js";

export default {
  name: "Login",
  data: function() {
    return {
      username: null,
      password: null,
      loginFalse: false
    };
  },
  computed: {
    session() {
      return this.$store.state.session;
    },
    authenticationData() {
      return this.$store.state.authenticationData;
    },
    userData() {
      return this.$store.state.userData;
    },
    apiKey() {
      return this.$store.state.apiKey;
    }
  },
  created: function() {
    this.getAuthenticationToken();
  },
  methods: {
    getAuthenticationToken: function() {
      fetch(
        "https://api.themoviedb.org/3/authentication/token/new?api_key=" +
          this.apiKey
      )
        .then(response => response.json())
        .then(json => {
          this.$store.commit("setAuthenticationData", json);
        });
    },
    getUserToken: function() {
      this.getAuthenticationToken();
      fetch(
        "https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=" +
          this.apiKey,
        {
          headers: {
            "Content-Type": "application/json"
          },
          method: "POST",
          body: JSON.stringify({
            username: this.username,
            password: this.password,
            request_token: this.authenticationData.request_token
          })
        }
      )
        .then(response => response.json())
        .then(json => {
          if (json.success) {
            this.loginFalse = false;
            this.$store.commit("setUserData", json);
            this.getUserSession();
          } else {
            this.loginFalse = true;
          }
        });
    },
    getUserSession: function() {
      fetch(
        "https://api.themoviedb.org/3/authentication/session/new?api_key=" +
          this.apiKey,
        {
          headers: {
            "Content-Type": "application/json"
          },
          method: "POST",
          body: JSON.stringify({
            request_token: this.userData.request_token
          })
        }
      )
        .then(response => response.json())
        .then(json => {
          this.$store.commit("setSession", json);
          this.getDetailsAccount();
        });
    },
    getDetailsAccount: function() {
      fetch(
        "https://api.themoviedb.org/3/account?api_key=" +
          this.apiKey +
          "&session_id=" +
          this.session.session_id
      )
        .then(response => response.json())
        .then(json => {
          this.$store.commit("setDetailsAccount", json);
        });
    }
  }
};
</script>
