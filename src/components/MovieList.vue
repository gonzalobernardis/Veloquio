<template>
    <div class="movieList">
        <MovieCard v-for="movie in filteredMovies" :key="movie.id" :movie="movie" />
    </div>
</template>

<style scoped>
.movieList {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
</style>

<script>
import MovieCard from '@/components/MovieCard.vue';
export default {
    components: {
        MovieCard,
    },
    props: {
        filteredMovies: {
            type: Array,
            required: true,
        },
    }
};
</script>