<template>
 <div class="fondo">
<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
<h1 class="comer">¿Donde quieres comer?</h1>
<div class="alianza">
  <img src="../assets/burgerking.png" alt="burgerkin">
  <img src="../assets/kfc.png" alt="kfc">
  <img src="../assets/mcdonalds.png" alt="mcdonalds">
  <img src="../assets/masopc.png" alt="añadir">
</div>
<br><br>
<div class="buscar">
<form action="../../form-result.php" method="post" target="_blank">

  <p>

    Encuentralo! <input type="search" name="busquerestau" placeholder="¿Donde vas a comer?">

    <input type="submit" value="Buscar">

  </p>
</form>
</div>
<div class="option">

 <button data-v-6c74490a="" class="c-results-item__action"><h4 data-v-6c74490a="" class="c-results-item__heading">Sucursal 4_0 Avenida</h4> <span data-v-6c74490a="" class="c-results-item__info">
              Abierto de 10:00:00 -
              20:00:00 <br data-v-6c74490a="">
             centro, Manizales colombia.
            </span></button>
            <button data-v-6c74490a="" class="c-results-item__action"><h4 data-v-6c74490a="" class="c-results-item__heading">Sucursal 75 Avenida</h4> <span data-v-6c74490a="" class="c-results-item__info">
              cerrado de 10:00:00 -
              20:00:00 <br data-v-6c74490a="">
              Kr 49 a 30,Manizales colombia.
            </span></button>
            <button data-v-6c74490a="" class="c-results-item__action"><h4 data-v-6c74490a="" class="c-results-item__heading">Sucursal 80 sur</h4> <span data-v-6c74490a="" class="c-results-item__info">
              Abierto de 10:00:00 -
              20:00:00 <br data-v-6c74490a="">
              cl 50a 30, Manizalescolombia.
            </span></button>

 
</div>
<div class="map">
  <iframe src=
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15888.913639907349!2d-75.17020274048149!3d5.382109987232267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4725512550633b%3A0x7fff5f3bf40f0b7e!2sPensilvania%2C%20Caldas!5e0!3m2!1ses-419!2sco!4v1653254865003!5m2!1ses-419!2sco"
   width="400" height="400" style="border:2rem;" allowfullscreen="" loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"></iframe>
 <br>
</div>

<!-- //form -->
<form class="formm" action="https://formsubmit.co/felipemontesjt200@gmail.com" method="POST">
<h1>Que tal tu experiencia?</h1>
          <label for="email">Nombre *</label>
          <input type="text" id="email" name="name" required="" minlength="3" maxlength="40" placeholder="Escribe tu nombre">
<br>

          <label for="name">Correo *</label>
          <input type="email" id="name" name="email" required="" placeholder="Escribe tu correo">
<br>
        
          <p>
            <label class="Contacc" for="mensaje">Mensaje:
              <span class="obligatorio">*</span>
            </label>                     
                              <textarea name="introducir_mensaje" class="texto_mensaje" id="mensaje" required="obligatorio" placeholder="Deja aquí tu mensaje."></textarea> 
                          </p>                
                          
                          <p>
                               <input type="submit" onclick=" " value="Enviar"> 
                          </p>
             

          <p class="aviso">
            <span class="obligatorio"> * </span>los campos son obligatorios.
           
</p>


 


</form>

        
        
        
<br><br>
</div>



</template>

<style scoped>
.fondo{
    background-image: url("../assets/fondo.png");
}
.option{
      display: grid;
    width: 400px;
}

</style>

<script lang="ts">
export default ({
  name: 'IncioComponent',
});
</script>