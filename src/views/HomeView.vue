<template>
  <div>
    <Header></Header>
    <SidebarMenu :genres="genres" @filter-updated="updateFilters" />
    <main class="main">
      <h1 class="tituloMain">Películas</h1>
      <div class="movie-container">
        <MovieList :movies="filteredMovies" />
      </div>
    </main>
    <Footer></Footer>
  </div>
</template>


<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import MovieList from '@/components/MovieList.vue';
import SidebarMenu from '@/components/SidebarMenu.vue';
import MovieCard from '@/components/MovieCard.vue';

export default {
  name: 'HomeView',
  data() {
    return {
      movies: [],
      genres: [],
      selectedGenre: '',
      selectedAgeFilter: '',
      searchTerm: ''
    };
  },
  components: {
    MovieList,
    Header,
    Footer,
    SidebarMenu,
    MovieCard
  },
  created() {
    this.fetchGenres();
    this.fetchMovies();
  },
  computed: {
    filteredMovies() {
      return this.movies.filter(movie => {
        return  (
          movie.title.includes(this.searchTerm) || (this.selectedGenre === '' || movie.genre_ids.includes(this.selectedGenre)) || (this.selectedAgeFilter === '' || this.checkAgeFilter(movie))
        );
      });
    },
  },
  methods: {
    updateMovies({ searchTerm }) {
      this.searchTerm = searchTerm;
    },
    filterByGenre() {
      this.selectedGenre = this.genre_ids;
    },
    filterByAge({ ageFilter }) {
      this.selectedAgeFilter = ageFilter;
    },
    checkAgeFilter(movie) {
      return this.selectedAgeFilter === 'mayor' ? movie.adult : !movie.adult;
    },
    fetchMovies() {
      const apiKey = '4ef343254726fa676e3b02cf1ed6493a';
      const response = fetch(`https://api.themoviedb.org/3/movie/popular?api_key=` + apiKey).then(response => {
        return response.json()
      }).then(resp => {
        this.movies = resp.results;
        console.log(this.movies)
      }).catch(error => {
        return "no se pudieron obtener las peliculas" + error;
      });
    },
    fetchGenres() {
      const apiKey = '4ef343254726fa676e3b02cf1ed6493a';
      const response = fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=` + apiKey).then(response => {
        return response.json();
      }).then(resp => {
        this.genres = resp.genres;
        console.log(this.genres)
      }).catch(error => {
        return "los generos no se pudieron obtener" + error;
      });
    },
    updateFilters(filters) {
      this.$emit('filter-updated', {
        searchTerm: this.searchTerm,
        selectedGenre: this.selectedGenre,
        selectedAgeFilter: this.selectedAgeFilter,
      });
      console.log(this.searchTerm)
      console.log(this.selectedAgeFilter)
      console.log(this.selectedGenre)
    },
  },
}
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

.tituloMain {
  text-align: center;
  font-size: 2em;
  margin-bottom: 20px;
  color: #ffcc00;
}

.movie-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.movie-title {
  font-size: 1.2em;
  margin-bottom: 0.5em;
  color: #ffcc00;
}

.movie-card {
  flex: 0 0 calc(30% - 20px); /* Ajustar el ancho de las tarjetas según las necesidades */
  margin-bottom: 20px;
  background-color: #2d132c;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.movie-card:hover {
  transform: scale(1.05);
}
</style>