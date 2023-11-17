<template>
    <footer>
        <div class="caja">
            <div>
                <h1 class="titulo">Veloquio</h1>
                <h2><a href="#">Privacidad</a></h2>
                <h2><a href="#">Centro de ayuda</a></h2>
                <h2><a href="#">Terminos de uso</a></h2>
            </div>
            <div>
                <h1 class="titulo">Contacto</h1>
                <h2 class="contac">Telefono: +54 911 8327 1350</h2>
                <h2>Email: veloquio@gmail.com</h2>
                <a class="volver" href="#volver">Volver<span style='font-size:30px;'>&#8679;</span></a>
                
            </div>
            <div>
                <h1 class="ubi">Nuestra ubicación</h1>
                <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.011300354499!2d-58.41356462336101!3d-34.603875757508106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca8c854bd13f%3A0xfc0cf5c054da4aa1!2sAbasto%20Shopping!5e0!3m2!1ses!2sar!4v1699971795536!5m2!1ses!2sar" width="300" height="150" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
    justify-content: space-around;
}
.caja h2 a {
    text-decoration: none;
    color: #ffffff;
}
footer{
    color: white;
    background: #301c41;
    background: #301c41;
    margin-top: 3vh;
    border-radius: 1em;
}
.volver{
    margin: 1em 0 0 3.7em;
    font-size: 28px;
    color: white;
    text-decoration: none;
    font-weight: bold;
}
.volver span{
    margin-left: 15px;
}
.ubi{
    text-align: center;
}
.map{
    margin-bottom: 20px;
}
.titulo{
    text-align: center;
}
.contac{
    margin-top: 20px;
}
</style>