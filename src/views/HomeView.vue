<template>
  <div>
    <Header></Header>
    <main class="main">
      <h1>Peliculas</h1>
      <div class="conteiner">
        <div class="card-pelicula">
          <img src="" alt="Nombre de la Película">
          <h5>Avengers: End Game</h5>
          <span class="favorite-icon">&#10084;</span>
        </div>

        <div class="card-pelicula">
          <img src="" alt="Nombre de la Película">
          <h5>Avengers: End Game</h5>
          <span class="favorite-icon">&#10084;</span>
        </div>

        <div class="card-pelicula">
          <img src="" alt="Nombre de la Película">
          <h5>Avengers: End Game</h5>
          <span class="favorite-icon">&#10084;</span>
        </div>
      </div>
      <div class="home">
      <MovieList :filteredMovies="filteredMovies" />
    </div>
    </main>
    <Footer></Footer>
  </div>
</template>
<style>
.main {
  font-family: Arial, sans-serif;
  background-color: #1c0b2b;
  margin: 0;
  padding: 1em;
  box-sizing: border-box;
  color: #ffffff;
}

.conteiner {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
  color: white;
}

.movie-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.conteiner .card-pelicula {
  padding: 10px;
}

.conteiner h5 {
  margin-top: 0;
}

.conteiner p {
  margin: 0;
}

.card-pelicula {
  width: 300px;
  margin: 20px;
  border: 1px solid black;
  border-radius: 5px;
  overflow: hidden;
  background-color: #413b6b;
}

.favorite-icon {
  color: #dc3545;
  cursor: pointer;
  font-size: 24px;
  margin-top: 10px;
}

.favorite-icon:hover {
  transform: scale(1.2);
}
</style>


<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import MovieList from '@/components/MovieList.vue';

export default {
  name: 'HomeView',
  data() {
    return {
      movies: [], // Almacena los datos de las películas
      genres: [], // Almacena los géneros de películas
      searchTerm: '',
      selectedGenre: '',
      selectedAgeFilter: '',
    };
  },
  components: {
    MovieList
  },
  created() {
    this.fetchGenres();
    this.fetchMovies();
  },
  computed: {
    filteredMovies() {
      // Aplicar filtros de búsqueda
      return this.movies.filter(movie => {
        return (
          movie.title.toLowerCase().includes(this.searchTerm.toLowerCase()) &&
          (this.selectedGenre === '' || movie.genre_ids.includes(parseInt(this.selectedGenre))) &&
          (this.selectedAgeFilter === '' || this.checkAgeFilter(movie))
        );
      });
    },
  },
  methods: {
    updateMovies({ searchTerm }) {
      this.searchTerm = searchTerm;
    },
    filterByGenre({ genreId }) {
      this.selectedGenre = genreId;
    },
    filterByAge({ ageFilter }) {
      this.selectedAgeFilter = ageFilter;
    },
    checkAgeFilter(movie) {
      // Verificar el filtro de edad
      return this.selectedAgeFilter === 'mayor' ? movie.adult : !movie.adult;
    },
    async fetchMovies() {
      const apiKey = '4ef343254726fa676e3b02cf1ed6493a';
      const response = fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`).then(response => {
        return response.json()
      }).then(resp => {
        console.log(resp)
        this.movies = resp.results;
      });
    },
    async fetchGenres() {
      // Realizar solicitud a la API de TMDb para obtener la lista de géneros
      const apiKey = '4ef343254726fa676e3b02cf1ed6493a';
      const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`);
      const data = await response.json();
      this.genres = data.genres;
    },
  },
  components: {
    Header,
    Footer,
    MovieList,
  }
}
</script>