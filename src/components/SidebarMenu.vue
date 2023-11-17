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

  </div>
</template>

<script>
export default {
  data() {
    return {
      showSidebar: true,
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

  },
};
</script>

<style scoped>
.sidebar-menu {
  background: #1c0b2b; 
  padding: 1em;
  color: #ffffff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); 
  z-index: 1000;
  display: flex;
  align-items: center; 
  justify-content: space-between; 
}

.sidebar-menu button {
  background: #363636; 
  color: #ffffff; 
  border: none;
  padding: 0.5em 1em;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.3s ease; 

}

.sidebar-menu button:hover {
  background: #555555; 
}


.sidebar-menu h2 {
  color: #ffffff;
  margin-bottom: 1em;
}
</style>
