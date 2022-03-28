<template>
  <div class="logoheader">
    <div class="div1">
      <img alt="logo" src="../assets/ONLY-CAKES2.png" class="logoimg">
    </div>
    <div class="div2">
      <img alt="logotext" src="../assets/tex2.png" class="logotext">
    </div>

  </div>
</template>

<script>
export default {
  name: 'Header'
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.logoheader{
  /* background-color: #42b983; */
  width: 100%;
  /* height: 15%; */
  display: flex;
  align-items: center;
  justify-content: center;
}

.div1{
  /* background-color: #1a1842; */
  /* height: 100%; */
  width: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.div2{
  /* background-color: #342f7e; */
  /* height: 100%; */
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logoimg{
  width:  50%;
}

.logotext{
  width: 70%;
}

</style>

