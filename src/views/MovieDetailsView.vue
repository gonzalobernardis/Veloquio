<template>
  <router-view :movie=movie>
    <h1>{{ movie.title }}</h1>
    <img :src="getFullImagePath(movie.poster_path)" alt="imagen de pelicula">
    <p>{{ movie.overview }}</p>
    <p>Fecha de estreno: {{ movie.release_date }}</p>
    <p>Genero: {{ getGenres(movie.genre_ids) }}</p>
  </router-view>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getFullImagePath(partialPath) {
      return `https://image.tmdb.org/t/p/original${partialPath}`;
    },
    getGenres(genreIds) {
      // Implementa la lógica para obtener los nombres de los géneros
      // Puedes consultar la lista de géneros que obtuviste al cargar las películas
      // y encontrar los nombres correspondientes.
      // Por ahora, simplemente mostramos los IDs de los géneros.
      return genreIds.join(', ');
    },
  },
};
</script>
