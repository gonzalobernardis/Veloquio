<template>
    <footer>
        <div class="caja">
            <div>
                <h1>Contactos</h1>
                <h2>Telefono: +54 4495 8327 1350</h2>
                <h2>Email: veloquio@gmail.com</h2>
            </div>
            <div class="velo">
                <a href="#volver">Veloquio</a>
            </div>
            <div>
                <h1>Nuestra ubicacion</h1>
            </div>    
        </div>
    </footer>    
</template>


<script>
export default {
    name: 'Footer',
    props: {

    }
}
</script>
<style scoped>
.caja{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}
footer{
    color: white;
    background: #301c41;
    background: #301c41;
    margin-top: 1200px;
    border-radius: 1em;
}
.velo{
    margin-top: 50px;
}
.velo a{
    color: white;
    text-decoration: none;
}
</style>