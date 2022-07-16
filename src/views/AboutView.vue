<template>
  <div class="about">
<AboutComponent/>
<FooterComponent/>
    </div>
  
</template>

<script>
import { defineComponent } from 'vue';
import AboutComponent from '@/components/AboutComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';




export default defineComponent({
  name: 'AboutView',
  components: {
  AboutComponent,
  FooterComponent,
  },
});
</script>
