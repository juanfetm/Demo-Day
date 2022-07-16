<template>
  <div class="inicio">
<UsuarioComponent/>
<FooterComponent/>
  </div>
  
</template>

<script>
import { defineComponent } from 'vue';
import FooterComponent from '@/components/FooterComponent.vue';
import UsuarioComponent from '@/components/UsuarioComponent.vue';



export default defineComponent({
  name: 'UsuarioView',
  components: {
  FooterComponent,
  UsuarioComponent,
  },
});
</script>
