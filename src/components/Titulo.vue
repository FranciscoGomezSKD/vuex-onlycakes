<template>
  <div class="title">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Titulo',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.title{
  background-color: #00000071;
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  
}

h1{
  color: #ffffff;
  font-size: xx-large;
}

</style>
