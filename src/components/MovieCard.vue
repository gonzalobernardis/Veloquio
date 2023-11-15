<template>
    <div class="card">
        <img :src="urlImagenPelicula" alt="imagen De Pelicula">
        <h2>{{ movie.title }}</h2>
        <p>{{ movie.overview }}</p>
    </div>
</template>

<style scoped>
.movie-card {
    margin: 1em;
    padding: 1em;
    border: 1px solid #ccc;
    border-radius: 8px;
    max-width: 200px;
    text-align: center;
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