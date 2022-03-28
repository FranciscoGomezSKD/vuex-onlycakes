<template>
  <div class="tablaped">
      <table>
          <thead>
              <tr class="th_nped">
                  <th>#</th>
                  <th>Cliente</th>
                  <th>Teléfono</th>
                  <th>Correo</th>
                  <th>Sabor</th>
                  <th>Decoración</th>
                  <th>Detalles</th>
              </tr><br>   
          </thead>
          <tbody>
              <tr>
                  <td>1</td>
                  <td> {{ $store.state.clientName }} </td>
                  <td> {{ $store.state.clientPhone }} </td>
                  <td> {{ $store.state.clientMail }} </td>
                  <td> {{ $store.state.clientFlavors }} </td>
                  <td> {{ $store.state.clientAccesories }} </td>
                  <td> {{ $store.state.clientDescript }} </td>
              </tr>
              <tr>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
              </tr>
              <tr>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
              </tr>
              <tr>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
              </tr>
              <tr>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
              </tr>
              
              
              
              
          </tbody>
      </table>
  </div>
</template>

<script>
export default {
  name: 'TablaPed'
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.tablaped{
  background-color: #ffffff;
  width: 90%;
  height: auto;
  padding: 3%;
  overflow-y: scroll;
}

.space{
  margin: 10%;
}

th {
  text-align: left;
  font-size: calc(0.3em + 0.6vw);
}

td {
  width: 1%;
  font-size: calc(0.3em + 0.6vw);
}

tbody td {
  text-align: left;
}

.th_nped { 
    width:  auto;
    text-align: left;
}

</style>

