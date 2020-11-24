<template>
  <div class="main-container-populateTheme" ref="containerDims">
    <div class="button-bottom" v-if="loaded">
      <CTAButton>NEXT</CTAButton>
    </div>
  </div>
</template>



<script>
//Components
import CTAButton from '../../components/CTAButton.vue'

//Services
//import {bus} from '@bit/piablo.lx-tech.bus';

//Vuex
//import { mapGetters, mapActions } from 'vuex';


//colors
//Blue1 rgb(0, 63, 226);
//Blue2 rgb(0, 2, 59);

export default {
  props: [
    'loaded'
  ],
  components: {
    CTAButton
  },
  data(){
    return {
    }
  },

  methods: {
    //...mapActions(['fetchTodos'])
  },

  //computed: mapGetters(['allTodos']),

  created(){
    // bus.$on("addFlashCardButtonComponent" + "onClick", (data) => {
    //   debugger;
    // })
  },
  mounted(){
    const containerDims = this.$refs.containerDims.getBoundingClientRect();
    const model = {
      width: containerDims.width,
      height: containerDims.height
    }
    this.$emit('containerDims', model);
  }
}
</script>

<style scoped>
.main-container-populateTheme{
  position: relative;
  width: 200px;
  height: 300px;
}



/* @media screen and (max-width: 600px) {
  .main-container-toolbar {
    height: 100px;
  }
} */
</style>