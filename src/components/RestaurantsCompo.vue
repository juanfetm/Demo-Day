<template>
<div class="fondo">
<br><br><br><br>

</div>


<div class="img">
  <li>
 <img src="../assets/comida/Rapida/rapida.png" alt="rapida" >
   <img src="../assets/comida/Vegetariana/vegetariana.png" alt="vegetariana "> 
    <img src="../assets/comida/Bebidas/bebidas.png" alt="bebidas"> 
  </li>
    
</div>

</template>



<style scoped>
.fondo{
    background-image: url("../assets/restaurantes.png");
}

img{
  width: 300px;
}


h1{
  text-align: end;
}
.img{
    justify-content: end;
}

</style>

<script lang="ts">
export default ({
  name: 'RestaurantsCompo',
});


</script>
