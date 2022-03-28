<template>
  <nav class="barranav">
    <router-link to="/" class="ruta"> Home </router-link> 
    <router-link to="/Pedidos" class="ruta">Pedidos</router-link> 
    <router-link to="/Pastelero" class="ruta">Pastelero</router-link> 
    <router-link to="/Tabla" class="ruta">Tabla</router-link> 
  </nav>
</template>

<script>
export default {
  name: 'BarraNav',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.barranav{
  background-color: #00000071;
  width: 5%;
  height: auto;
  display: flex;
}

nav{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(0.3em + 0.7vw);
  
}

.ruta{
  border-radius: 0.3em;
  box-shadow: 2px 2px 5px cyan;
  background-color: #ffffff;
  margin-top: 1em;
  margin-bottom: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10%;
}

</style>
