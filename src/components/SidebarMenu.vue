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
      <select class="select1" v-model="selectedAgeFilter" @change="applyFilters">
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
      console.log(this.searchTerm)
      console.log(this.selectedGenre)
      console.log(this.selectedAgeFilter)
    },
  },
};
</script>

<style scoped>
.sidebar-menu {
  background: #361751; 
  padding: 1em;
  color: #ffffff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); 
  z-index: 1000;
  display: flex;
  align-items: center; 
  justify-content: space-between; 
  flex-direction: row;
}
.filter-row {
  display: flex;
  justify-content: space-between;
  width: 100%; 
}
.filter-item {
  flex: 1; 
  margin-right: 1em; 
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
@media (max-width: 768px) {
  .filter-row {
    flex-direction: column; 
  }

  .filter-item {
    margin-right: 0; 
    margin-bottom: 1em; 
  }
  .sidebar-menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center
}
input{
  margin-left: 1em;
}
select{
  margin-left: 2.9em;
}
.select1{
  margin-left: 3.9em;
  margin-bottom: 1em;
}
}
</style>
