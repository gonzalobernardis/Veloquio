<template>
    <div class="movieList">
        <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
    </div>
</template>

<style scoped>
.movieList {
    display: flex;
    flex-wrap: wrap;
    gap: 5em;
    justify-content: space-between;
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
    }
};
</script>