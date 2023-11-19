<template>
  <div class="movieList">
    <router-link v-for="movie in movies" :key="movie.id" :to="{ name: 'movie-details', params: { id: movie.id } }">
      <MovieCard :movie="movie" />
    </router-link>
  </div>
  </template>
  
  <style scoped>
  .movieList {
    display: flex;
    flex-wrap: wrap;
    gap: 5em;
    justify-content: space-between;
  }
  
 
  @media (max-width: 768px) {
    .movieList {
      gap: 2em; 
      justify-content: center; 
    }
  }
  </style>
  
  <script>
  import MovieCard from '@/components/MovieCard.vue';
  export default {
    components: {
      MovieCard,
    },
    props: {
      movies: {
        type: Array,
        required: true,
      },
    },
    methods: {
      addToFavorites(movie) {
        this.$store.dispatch('addMovieToFavorites', movie);
      },
    },
  };
  </script>