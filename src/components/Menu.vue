<template>
  <div class="menu">
    <h2 align="center"> MENÚ </h2>      
      <div>
        <table>
          <tr>
            <th>Sabores</th>
            <th></th>
            <th></th>
          </tr>
          <tr>
            <td> 4 Chocolates </td>
            <td> ..................... </td>
            <td> $30.00 </td>
          </tr>
          <tr>
            <td> Cheesecake </td>
            <td> ..................... </td>
            <td> $40.00 </td>
          </tr>
          <tr>
            <td> Carrotcake </td>
            <td> ..................... </td>
            <td> $50.00 </td>
          </tr>
          <tr>
            <td> Frutos rojos </td>
            <td> ..................... </td>
            <td> $60.00 </td>
          </tr>
          <tr>
            <td> Tiramisú </td>
            <td> ..................... </td>
            <td> $70.00 </td>
          </tr>
          <tr>
            <td> Durazno </td>
            <td> ..................... </td>
            <td> $80.00 </td>
          </tr>
        </table>
      </div>
      <div class="space"></div>
      <div>
        <table>
          <tr>
            <th>Decoración</th>
            <th></th>
            <th></th>
          </tr>
          <tr>
            <td> Mermelada </td>
            <td> ..................... </td>
            <td> $10.00 </td>
          </tr>
          <tr>
            <td> Zarzamora </td>
            <td> ..................... </td>
            <td> $20.00 </td>
          </tr>
          <tr>
            <td> Rizos de chocolate </td>
            <td> ..................... </td>
            <td> $30.00 </td>
          </tr>
          <tr>
            <td> Nuez </td>
            <td> ..................... </td>
            <td> $40.00 </td>
          </tr>
          <tr>
            <td> Coco </td>
            <td> ..................... </td>
            <td> $50.00 </td>
          </tr>
          <tr>
            <td> Glasé de Frutas </td>
            <td> ..................... </td>
            <td> $60.00 </td>
          </tr>
        </table>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Menu'
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.menu{
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

