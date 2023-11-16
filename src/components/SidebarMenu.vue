<template>
  <div v-show="showSidebar" class="sidebar-menu">
    <h2>Filtros</h2>

    <div>
      <label>Buscar por nombre:</label>
      <input v-model="searchTerm" @input="applyFilters" />
    </div>

    <div>
      <label>Género:</label>
      <select v-model="selectedGenre" @change="applyFilters">
        <option value="">Todos</option>
        <option v-for="genre in genres" :key="genre.id" :value="genre.id">
          {{ genre.name }}
        </option>
      </select>
    </div>

    <div>
      <label>Edad:</label>
      <select v-model="selectedAgeFilter" @change="applyFilters">
        <option value="">Todos</option>
        <option value="mayor">Mayores de 18</option>
        <option value="menor">Menores de 18</option>
      </select>
    </div>
    <button @click="applyFilters">Aplicar Filtros</button>
    <button @click="toggleSidebar">Mostrar/Ocultar</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showSidebar: false,
      searchTerm: '',
      selectedGenre: '',
      selectedAgeFilter: '',
    };
  },
  props: {
    genres: {
      type: Array,
      required: true,
    },
  },
  methods: {
    applyFilters() {
      this.$emit('filter-updated', {
        searchTerm: this.searchTerm,
        selectedGenre: this.selectedGenre,
        selectedAgeFilter: this.selectedAgeFilter,
      });
    },
    toggleSidebar() {
      this.showSidebar = !this.showSidebar;
    },
  },
};
</script>

<style scoped>
.sidebar-menu {
  position: fixed;
  top: 0;
  left: 0;
  background: #f0f0f0;
  padding: 1em;
  width: 250px;
  height: 100%;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 1em;
}
</style>
