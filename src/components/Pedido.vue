<template>
  <div class="pedido">
    <article class="art_pan1">
        <p>Seleccione los sabores y adornos de su preferencia:</p><br>
        <p>Sabores</p>
        <input type="checkbox" @click="$store.dispatch('Sabor', '4 Chocolates')" id="topping1" name="topping1" value="Sabor1">
        <label for="topping1">4 Chocolates</label><br>
        <input type="checkbox" @click="$store.dispatch('Sabor', 'Cheesecake')" id="topping2" name="topping2" value="Sabor2">
        <label for="topping2">Cheesecake</label><br>
        <input type="checkbox" @click="$store.dispatch('Sabor', 'Carrotcake')" id="topping3" name="topping3" value="Sabor3">
        <label for="topping3">Carrotcake</label><br>
        <input type="checkbox" @click="$store.dispatch('Sabor', 'Frutos rojos')" id="topping4" name="topping4" value="Sabor4">
        <label for="topping4">Frutos rojos</label><br>
        <input type="checkbox" @click="$store.dispatch('Sabor', 'Tiramisú')" id="topping5" name="topping5" value="Sabor5">
        <label for="topping5">Tiramisú</label><br>
        <input type="checkbox" @click="$store.dispatch('Sabor', 'Durazno')" id="topping6" name="topping6" value="Sabor6">
        <label for="topping6">Durazno</label><br>
        <br>
        <p>Decoración</p>
        <input type="checkbox" @click="$store.dispatch('Decoracion', 'Mermelada')" id="topping7" name="topping7" value="Adorno1">
        <label for="topping7">Mermelada</label><br>
        <input type="checkbox" @click="$store.dispatch('Decoracion', 'Zarzamora')" id="topping8" name="topping8" value="Adorno2">
        <label for="topping8">Zarzamora</label><br>
        <input type="checkbox" @click="$store.dispatch('Decoracion', 'Rizos de chocolate')" id="topping9" name="topping9" value="Adorno3">
        <label for="topping9">Rizos de chocolate</label><br>
        <input type="checkbox" @click="$store.dispatch('Decoracion', 'Nuez')" id="topping10" name="topping10" value="Adorno4">
        <label for="topping10">Nuez</label><br>
        <input type="checkbox" @click="$store.dispatch('Decoracion', 'Coco')" id="topping11" name="topping11" value="Adorno5">
        <label for="topping11">Coco</label><br>
        <input type="checkbox" @click="$store.dispatch('Decoracion', 'Glasé de Frutas')" id="topping12" name="topping12" value="Adorno6">
        <label for="topping12">Glasé de Frutas</label><br>

        <br>
        <br>

        <p>Datos del cliente</p>
        <form action="/accion.js" id="form1" method="post">
            <label for="nombre">Nombre: </label>
            <input type="text" id="nombre" name="nombre" v-model="name" ><br><br>
            <label for="telefono">Teléfono:</label>
            <input type="text" id="telefono" name="telefono" v-model="phone" ><br><br>
            <label for="email">e-mail:</label>
            <input type="text" id="email" name="email" v-model="mail" ><br><br>
            <label for="descripcion">Descripción:</label>
            <input type="text" id="descripcion" name="descripcion" style="width:400px;height:200px" v-model="descript" > <br><br>
            <label for="sabores">Sabores elegidos:</label>
            <input type="text" id="sabores" name="sabores" style="width:400px;height:20px" :value="$store.state.sabores"  ><br><br> <!--v-model="flavors"-->
            <label for="adornos">Decoración elegida:</label>
            <input type="text" id="adornos" name="adornos" style="width:400px;height:20px" :value="$store.state.adorno"  ><br><br>  <!--v-model="accesories"-->
            <input type="button" value="Realizar pedido" class="userbutton" @click="$store.dispatch('DataPedido', [name, phone, mail, descript, $store.state.sabores, $store.state.adorno])"
              onclick="alert('Se ha realizado su pedido. Muchas Gracias');">
            <input type="reset" class="userbutton">
        </form>

        <br>
        <br>

    </article>
  </div>
</template>

<script>
export default {
  name: 'Pedido'
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.pedido{
  background-color: #ffffff;
  width: 30%;
  padding: 1%;
  text-align: left;
  /* overflow: auto;  */
}

.art_pan1{
    width: 100%;
    height: 40vh;
    overflow-y: scroll;
    font-size: calc(0.3em + 0.6vw);
    font-weight: normal;
}

.userbutton{
  margin: 2%;
}

</style>

