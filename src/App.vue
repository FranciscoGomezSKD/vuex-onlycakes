<template>
  <router-view/>  <!-- Seccion donde se muestran los views -->
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
  /*************************** user edit *******************************************/
  background: url("./assets/cupcake.png");
  background-size: cover;
  height: auto;
  width: 100%;
  /* position: relative; */
  margin: 0% 0% 0% 0%;
  /*********************************************************************************/
}

nav {
  padding: 30px;
  /* display: flex;
  flex-direction: column; */
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
