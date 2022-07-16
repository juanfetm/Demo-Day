<template>
 <nav class="nav">
    <img class="nav" src="../src/assets/logo.png" alt="logo"> <a href="#" class="c-menu__item" data-v-1c12100b=""><router-link to="/">
     Inicio</router-link> </a>
      <a href="#" class="c-menu__item" data-v-1c12100b=""><router-link to="/restaurants">
       Restaurantes </router-link></a>
        <a href="#" class="c-menu__item" data-v-1c12100b=""> <router-link to="/about">
         Contacto </router-link></a> 
         <button class="sectionU"><a href="#" class="c-menu__item" data-v-1c12100b=""> <router-link to="/Usuario">
         Login </router-link></a> </button>
         </nav>
  <router-view/>

</template>



<style lang="css">
@import "./scss/main.css"
</style>


