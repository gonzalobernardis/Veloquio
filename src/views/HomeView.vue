<template>
  <div>
    <Header></Header>
    <main class="main">

      <div class="conteiner">

        <div class="card-pelicula">
          <img src="" alt="Nombre de la Película">
          <h5>Avengers: End Game</h5>
          <span class="favorite-icon">&#10084;</span>
        </div>

        <div class="card-pelicula">
          <img src="" alt="Nombre de la Película">
          <h5>Avengers: End Game</h5>
          <span class="favorite-icon">&#10084;</span>
        </div>

        <div class="card-pelicula">
          <img src="" alt="Nombre de la Película">
          <h5>Avengers: End Game</h5>
          <span class="favorite-icon">&#10084;</span>
        </div>
        
      </div>
      

      


    </main>
    <Footer></Footer>
  </div>
</template>
<style>
.main {
  font-family: Arial, sans-serif;
  background-color: #1c0b2b;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.conteiner {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
  color: white;
}

.movie-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.conteiner .card-pelicula {
  padding: 10px;
}

.conteiner h5 {
  margin-top: 0;
}

.conteiner p {
  margin: 0;
}

.card-pelicula {
  width: 300px;
  margin: 20px;
  border: 1px solid black;
  border-radius: 5px;
  overflow: hidden;
  background-color: #413b6b;
}

.favorite-icon {
  color: #dc3545;
  cursor: pointer;
  font-size: 24px;
  margin-top: 10px;
}

.favorite-icon:hover {
  transform: scale(1.2);
}
</style>


<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'HomeView',
  components: {
    Header,
    Footer
  }
}
</script>