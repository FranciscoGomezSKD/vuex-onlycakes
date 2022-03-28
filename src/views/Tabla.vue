<template>
  <div class="home">
    <Header/>
    
    <div class="centralPanel">
        <Titulo msg="Nuevos Pedidos"/>
        <div class="divcentral">
            <BarraNav/>
            <div class="leftPanel">
              <div class="whiteCont">
                <TablaPed/>
              </div>
            </div>
        </div>
    </div>

    <Contacto/>
    
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Header from "../components/Header.vue";
import Titulo from "../components/Titulo.vue";
import BarraNav from "../components/BarraNav.vue";
import TablaPed from "../components/TablaPed.vue";
import Menu from "../components/Menu.vue";
import Contacto from "../components/Contacto.vue";

export default {
  name: 'HomeView',
  components: {
    // HelloWorld,
    Header,
    Titulo,
    BarraNav,
    TablaPed,
    Contacto
  },
}
</script>

<style scoped>

.centralPanel{
  /* background-color: #423636; */
  width: 100%;
  height: auto;
}

.divcentral{
  /* background-color: #245227; */
  width: 100%;
  display: flex;
}

.leftPanel{
  /* background-color: #245227; */
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.whiteCont{
  background-color: rgba(255, 255, 255, 0.295);
  width: 100%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5em;
  margin: 1.5%;
}

</style>