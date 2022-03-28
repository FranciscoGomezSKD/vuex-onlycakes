<template>
  <footer class="contacto">
    <div class="div1">
      <img src="../assets/ONLY-CAKES2.png" class="foot_sec1" alt="Only-cakes">
    </div>
    <div class="div2Data">
      <p> Av. Siempreviva No.742 <br>
          Col. Las Flores, C.P.04123, Azcapotzalco, CDMX <br>
          Tel. 5523367712 <br>
          Horario de Atencíón: Lun - Vie, 09:00 - 20:00 hrs <br>
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Contacto'
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

footer{
    background-color: rgba(255, 255, 255, 0.295); 
    background-size: auto;
    width: 100%;
    padding-top: 0.2%;
    padding-bottom: 0.2%;
}

.contacto {
  display: flex;
  align-items: center;
  justify-content: left;
}

.div1 {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10%;
  position: relative;
}

.foot_sec1{
    /* margin: 1%; */
    width: 50%;
    /* background-color: #ee5959; */
    position: absolute;
}

.div2Data {
  width: 100%;
  text-align: left;
  /* background-color: #ac3c3c; */
  font-size: calc(0.3em + 0.6vw);
  font-weight: bold;
}

</style>

