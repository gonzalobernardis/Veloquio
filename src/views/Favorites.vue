<template>
  <div>
    <Header></Header>
    <main class="main">
      <h1 class="tituloMain">Películas Favoritas</h1>
      <div class="favorites-container">
        <div v-if="favorite" v-for="favorite in favorites" :key="favorite.id" class="favorite-card">
          <h2>{{ favorite.title }}</h2>
          <img class="fav-img" :src="getFullImagePath(favorite.poster_path)" alt="imagen de pelicula">
          <p>{{ favorite.overview }}</p>
          <button @click="removeFromFavorites(favorite.id)">Quitar de favoritos</button>
        </div>
      </div>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  data() {
    return {
      favorites: [],
    };
  },
  created() {
    this.loadFavorites();
  },
  methods: {
    loadFavorites() {
      const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      this.favorites = favorites;
    },
    removeFromFavorites(movieId) {
      const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      const updatedFavorites = favorites.filter(favorite => favorite.id !== movieId);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      this.loadFavorites(); // Actualizar la lista después de la acción
    },
    getFullImagePath(partialPath) {
      return `https://image.tmdb.org/t/p/original${partialPath}`;
    },
    getGenres(genreIds) {
      // 
    },
  },
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped>


.favorites-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.favorite-card {
  width: 300px;
  margin: 20px;
  padding: 10px;
  background-color: #2d132c;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}
.fav-img{
  width: 100%;
  height: auto;
}
.favorite-card:hover {
  transform: scale(1.05);
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
  .favorite-card {
    width: 100%; 
  }
}
</style>