<template>
  <div  >
    <Header></Header>
    <div class="cardDetails">
    <h1>{{ movie.title }}</h1>
    <img class="imgDetails" :src="getFullImagePath(movie.poster_path)" alt="imagen de pelicula">
    <p>{{ movie.overview }}</p>
    <p>Fecha de estreno: {{ movie.release_date }}</p>
    <p>Genero: {{ getGenres(movie.genre_ids) }}</p>
  </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      movie: null,
      _id: ""
    };
  },
  created() {
    this._id = this.$route.params.id
    this.loadMovieDetails();
  },
  methods: {
    async loadMovieDetails() {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${this._id}?api_key=4ef343254726fa676e3b02cf1ed6493a`);
        const data = await response.json();
        this.movie = data;
      } catch (error) {
        console.error('Error al cargar detalles de la película:', error);
      }
    },
    getFullImagePath(partialPath) {
      return `https://image.tmdb.org/t/p/original${partialPath}`;
    },
    getGenres(genreIds) {
      // return genreIds.join(', ');
    },
  },
  components:{
    Header,
    Footer,
  }
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Arial', sans-serif;
  background-color: #1c0b2b;
  color: #ffffff;
}

.main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.cardDetails {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3em;
}

.imgDetails {
  width: 30vw;
  height: auto;
  align-items: center;
  padding-top: 3em;
}
.cardDetails p{
  padding-top: 3em;
}
</style>
