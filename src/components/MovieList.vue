<template>
    <div class="movielist">
        <div v-for="movie in filteredMovies" :key="movie.id" class="moviecard">
            <img :src="'https://image.tmdb.org/t/p/w200' + movie.poster_path" alt="Poster">
            <h2>{{ movie.title }}</h2>
            <p>{{ movie.overview }}</p>
        </div>
    </div>
</template>

<style scoped>
    .movielist {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    .moviecard {
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
        filteredMovies: {
            type: Array,
            required: true,
        },
    },
};
</script>