<template>
    <header id="volver">
        <nav class="links-container">
            <h1>Veloquio</h1>
            <router-link class="link" to="/">Inicio</router-link>
            <router-link class="link" to="/favorites">Favoritos</router-link>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
        background-color: #19C37D;
        color: #ffffff;
        height: 10vh;
        border-radius: 1em;
    }
    .link {
        text-decoration: none;
        color: #ffffff;
    }
    .link:hover {
        text-decoration: underline #000000;
        text-underline-offset: 0.5em;
    }

</style>