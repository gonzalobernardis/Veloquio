<template>
    <header id="volver">
        <nav class="links-container">
            <h1>Veloquio</h1>
            <router-link class="link" to="/">Inicio</router-link>
            <router-link class="link" to="/favorites">Ir a Favoritos</router-link>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'Header',
    props: {
        
    }
}
</script>


<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.links-container {
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #413b6b;
  color: #ffffff;
  height: 10vh;
}

.link {
  text-decoration: none;
  color: #ffffff;
}

.link:hover {
  text-decoration: underline #ffffff;
  text-underline-offset: 0.5em;
}


@media (max-width: 768px) {
  .links-container {
    flex-direction: column;
    height: auto;
    padding: 1em;
  }

  h1 {
    margin-bottom: 1em; 
  }
}
</style>