<!-- En MovieDetailsView.vue -->
<template>
  <div>
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
        // Lógica para cargar detalles de la película usando this.id
        // Puedes usar una API o algún otro método para obtener los detalles
        const response = await fetch(`https://api.themoviedb.org/3/movie/${this.id}?api_key=TU_API_KEY`);
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
      // Implementa la lógica para obtener los nombres de los géneros
      // Puedes consultar la lista de géneros que obtuviste al cargar las películas
      // y encontrar los nombres correspondientes.
      // Por ahora, simplemente mostramos los IDs de los géneros.
      return genreIds.join(', ');
    },
  },
};
</script>
