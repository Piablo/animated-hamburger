<template>
  <div class="main-container-home theme-color-2">
    <Toolbar>
      <template v-slot:left-controls></template>
      <template v-slot:center-controls></template>
      <template v-slot:right-controls>
        <AnimatedHamburger></AnimatedHamburger>
      </template>
    </Toolbar>

    <div class="content-container-home theme-color-1"></div>

    <Footer></Footer>
  </div>
</template>



<script>
//Components
import Toolbar from '../components/Toolbar';
import Footer from '../components/Footer';

//Modules
import AnimatedHamburger from '../modules/AnimatedHamburger';

//Services
//import {bus} from '@bit/piablo.lx-tech.bus';

//Vuex
//import { mapGetters, mapActions } from 'vuex';


//colors
//Blue1 rgb(0, 63, 226);
//Blue2 rgb(0, 2, 59);

export default {
  props: [
    'props'
  ],
  components: {
    Toolbar,
    Footer,
    //Modules
    AnimatedHamburger
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
  }
}
</script>

<style scoped>


.main-container-home{
  width: 100%;
  height: 100%;
  position: relative;
}
.content-container-home{
  width: calc(100% - 20px);
  height: calc(100% - 55px - 55px);
  position: absolute;
  top: 55px;
  left: 10px;
  z-index: 1;
}
</style>