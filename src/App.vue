<template>
  <div class="container">
    <img
      class=" rounded mx-auto d-block mt-5 mb-5 "
      src="../src/assets/title.png"
    />
    <div v-if="this.detailsAccount != null">
      <div class="row pl-5" id="nav">
        <div class="col-md-6 mr-auto p-2">
          <router-link class="mr-5" :to="{ name: 'Home' }">Accueil</router-link>
          <router-link class="mr-5" :to="{ name: 'Favoris' }"
            >Favoris</router-link
          >
          <router-link class="mr-5" :to="{ name: 'MovieToSee' }"
            >Films à voir</router-link
          >
        </div>
        <div class="col-md-3 ">
          <input
            placeholder="Recherche"
            @keyup.enter="getSearchWord"
            v-model="searchWord"
            class="form-control  "
            style="border-radius: 3px ;"
          />
        </div>
      </div>

      <router-view :searchWord="formData" />
    </div>
    
    <div v-else>
      <login></login>
    </div>
    <footer class="sticky-bottom mt-5">
      <div style="display:flex; justify-content:center"> <h1 class="p text-center pr-2">Fakeflix </h1>
      <p class="text-center ">
         ©2020 - Powered by
        <a target="_bank" href="https://www.themoviedb.org/">themoviedb.org</a>
      </p></div>
       <div><p class="text-center ">
        Developped by
        <a target="_bank" href="https://www.romain-pommier.com/"
          >romain-pommier.com</a
        >
      </p></div>
     
     
    </footer>
  </div>
</template>

<script>
import Login from "./views/Login.vue";

export default {
  name: "App",
  data: function() {
    return {
      searchWord: null,
      formData: null
    };
  },
  computed: {
    session() {
      return this.$store.state.session;
    },
    userData() {
      return this.$store.state.userData;
    },
    detailsAccount() {
      return this.$store.state.detailsAccount;
    },
    apiKey() {
      return this.$store.state.apiKey;
    },
    watchList() {
      return this.$store.state.watchList;
    },
    favorisFilms() {
      return this.$store.state.favorisFilms;
    }
  },
  created: function() {},
  watch: {
    detailsAccount: function() {
      this.$store.dispatch("getFavorisMovies");
      this.$store.dispatch("getWatchList");
    },
    searchWord: function() {
      this.getSearchWord();
    }
  },

  methods: {
    getSearchWord: function() {
      if (this.$router.currentRoute.name != "Home") {
        this.$router.push({ name: "Home" });
      }

      this.formData = this.searchWord != "" ? this.searchWord : null;
    },
    getFavorisMovies: function() {
      fetch(
        "https://api.themoviedb.org/3/account/" +
          this.detailsAccount.id +
          "/favorite/movies?api_key=" +
          this.apiKey +
          "&session_id=" +
          this.session.session_id +
          "&sort_by=created_at.asc"
      )
        .then(response => response.json())
        .then(json => {
          this.$store.commit("setFavorisFilms", json.results);
        });
    }
  },
  components: {
    Login
  },
  mounted: function() {}
};
</script>

<style>
* {
  color: white;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}
footer{
  /* display:flex; */
}
h1 {
  color: red;
  text-transform: capitalize;
  font-size: 100px;
}
.p{
  color: white;
  font-size: 18px;
  font-weight: normal;
  margin: 0;
  padding: 0;
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
