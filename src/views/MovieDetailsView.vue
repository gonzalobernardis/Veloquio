<template>
<div v-if="movie">
  <h1>{{ movie.title }}</h1>
    <img :src="getFullImagePath(movie.poster_path)" alt="imagen de pelicula">
    <p>{{ movie.overview }}</p>
    <p>Fecha de estreno: {{ movie.release_date }}</p>
    <p>Genero: {{ getGenres(movie.genre_ids) }}</p>
  </div>
</template>

<script>
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
    };
  },
  created() {
    // Realiza la lógica para cargar los detalles de la película utilizando el ID
    this.loadMovieDetails();
  },
  methods: {
    async loadMovieDetails() {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${this.id}?api_key=4ef343254726fa676e3b02cf1ed6493a`);
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
      return genreIds.join(', ');
    },
  },
};
</script>
