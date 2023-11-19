<template>
  <div>
    <Header></Header>
    <div v-if="movie" class="cardDetails">
      <h1>{{ movie.title }}</h1>
      <img class="imgDetails" :src="getFullImagePath(movie.poster_path)" alt="imagen de pelicula">
      <p>{{ movie.overview }}</p>
      <p>Fecha de estreno: {{ movie.release_date }}</p>
      <p>Genero: {{ getGenres(movie.genre_ids) }}</p>
      <button @click="toggleFavorites" :disabled="isInFavorites">{{ isInFavorites ? 'Quitar de favoritos' : 'Agregar a favoritos' }}</button>
    </div>
    <div v-else>
      <h2>Cargando....</h2>
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
      _id: "",
      isInFavorites: false,
    };
  },
  created() {
    this._id = this.$route.params.id
    this.loadMovieDetails();
    this.checkFavorites();
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
    toggleFavorites() {
      const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      const index = favorites.findIndex(favorite => favorite.id === this._id);

      if (index !== -1) {
        favorites.splice(index, 1);
        this.isInFavorites = false;
      } else {
        favorites.push(this.movie);
        this.isInFavorites = true;
      }

      localStorage.setItem('favorites', JSON.stringify(favorites));
    },
    checkFavorites() {
      const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      this.isInFavorites = favorites.some(favorite => favorite.id === this._id);
    },
  },

  components: {
    Header,
    Footer,
  }
};
</script>
<style scoped>
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

.cardDetails {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3em;
}

.imgDetails {
  width: 100%;
  height: auto;
  max-width: 30vw;
  margin-top: 1em;
}

.cardDetails p {
  padding-top: 1em;
}

button {
  background-color: transparent;
  color: #ffffff;
  border: none;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;
}

button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}


@media (max-width: 768px) {
  .imgDetails {
    max-width: 100%;
  }
}
</style>