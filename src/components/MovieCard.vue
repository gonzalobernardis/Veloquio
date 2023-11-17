<template>
    <router-link :to="{ name: 'movie-details', params: { id: movie.id } }" class="linkContainer">
      <div class="card">
        <img :src="urlImagenPelicula" alt="imagen De Pelicula">
        <h4 class="movie-title">{{ movie.title }}</h4>
        <p>{{ movie.release_date }}</p>
      </div>
    </router-link>
  </template>

<style scoped>
.card {
    margin: 1em;
    padding: 1em;
    width: 15vw;
}
.linkContainer {
    text-decoration: none;
    color: #ffffff;
}
</style>

<script>
export default {
    props: {
        movie: {
            type: Object,
            required: true,
        },
    },
    computed: {
        urlImagenPelicula() {
            return `https://image.tmdb.org/t/p/w200${this.movie.poster_path}`;
        },
    }
};
</script>