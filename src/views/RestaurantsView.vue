<template>
<div class="restaurants">
  <RestaurantsCompo/>
  <FooterComponent/>
</div>
  
</template>

<script>
import { defineComponent } from 'vue';
import RestaurantsCompo from '@/components/RestaurantsCompo.vue';
import FooterComponent from '@/components/FooterComponent.vue';

export default defineComponent({
  name: 'RestaurantsView',
  components: {
  RestaurantsCompo,
  FooterComponent,
  },
});
</script>
