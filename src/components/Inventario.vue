<template>
  <div class="inventario">
    <!-- <h2 align="center"> MENÚ </h2>       -->
      <div>
        <table>
          <tr>
              <th>Sabores Disponibles</th>
              
          </tr>
          <tr>
              <td></td>
              <td>4 Chocolates</td>
              <td>10 pz</td>
          </tr>
          <tr>
              <td></td>
              <td>Cheesecake</td>
              <td>8 pz</td>
          </tr>
          <tr>
              <td></td>
              <td>Carrotcake</td>
              <td>3 pz</td>
          </tr>
          <tr>
              <td></td>
              <td>Frutos rojos</td>
              <td>1 pz</td>
          </tr>
          <tr>
              <td></td>
              <td>Tiramisú</td>
              <td>0 pz</td>
          </tr>
          <tr>
              <td></td>
              <td>Durazno</td>
              <td>7 pz</td>
          </tr>
        </table>           
      </div>
      <div class="space"></div>
      <div>
        <table>
          <tr>
              <th>Decoración Disponible</th>
              
          </tr>
          <tr>
              <td></td>
              <td>Mermelada</td>
              <td>20 pz</td>
          </tr>
          <tr>
              <td></td>
              <td>Zarzamora</td>
              <td>20 pz</td>
          </tr>
          <tr>
              <td></td>
              <td>Rizos de chocolate</td>
              <td>20 pz</td>
          </tr>
          <tr>
              <td></td>
              <td>Nuez</td>
              <td>20 pz</td>
          </tr>
          <tr>
              <td></td>
              <td>Coco</td>
              <td>20 pz</td>
          </tr>
          <tr>
              <td></td>
              <td>Glasé de Frutas</td>
              <td>20 pz</td>
          </tr>
        </table>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Inventario'
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.inventario{
  background-color: #ffffff;
  width: 30%;
  padding: 1%;
}

.space{
  margin: 10%;
}

th {
  text-align: left;
  font-size: calc(0.3em + 0.6vw);
}

td {
  width: 10%;
  font-size: calc(0.3em + 0.6vw);
}

tbody td {
  text-align: left;
}

</style>

