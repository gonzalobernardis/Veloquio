<template>
  <div>
    <Header></Header>
    <SidebarMenu :genres="genres" @filter-updated="updateFilters" />
    <main class="main">
      <h1 class="tituloMain">Peliculas</h1>
      <div class="home">
        <MovieList :movies="filteredMovies" />
      </div>
    </main>
    <Footer></Footer>
  </div>
</template>


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

.home {
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
  margin: 1em;
  padding: 1em;
  width: 30%;
  background-color: #2d132c;

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.movie-card:hover {
  transform: scale(1.05);

}
</style>


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
        return (
          movie.title.includes(this.searchTerm) &&
          (this.selectedGenre === '' || movie.genre_ids.includes(this.selectedGenre)) &&
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
      return this.selectedAgeFilter === 'mayor' ? movie.adult : !movie.adult;
    },
    fetchMovies() {
      const apiKey = '4ef343254726fa676e3b02cf1ed6493a';
      const response = fetch(`https://api.themoviedb.org/3/movie/popular?api_key=4ef343254726fa676e3b02cf1ed6493a`).then(response => {
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
      const response = fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=4ef343254726fa676e3b02cf1ed6493a`).then(response => {
        return response.json();
      }).then(resp => {
        this.genres = resp.genres;
      }).catch(error => {
        return "los generos no se pudieron obtener" + error;
      });
    },
    updateFilters(filters) {
      this.updateMovies(filters);
      this.filterByGenre(filters);
      this.filterByAge(filters);
    },
  },
}
</script>