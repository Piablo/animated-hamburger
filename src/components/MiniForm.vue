<template>
<!-- <div v-for="(artwork, index) in artWorks" :key="index"></div> -->
  <div>
    <slot></slot>
  </div>
</template>



<script>
//Components
// import HelloWorld from '@/components/HelloWorld.vue'

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
    // HelloWorld
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



/* @media screen and (max-width: 600px) {
  .main-container-toolbar {
    height: 100px;
  }
} */
</style>