<template>
  <div class="inicio">
<IncioComponent/>
<FooterComponent/>
  </div>
  
</template>

<script>
import { defineComponent } from 'vue';
import IncioComponent from '@/components/IncioComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';




export default defineComponent({
  name: 'InicioView',
  components: {
  IncioComponent,
  FooterComponent,
  },
});
</script>
