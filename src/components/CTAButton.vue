<template>
<!-- <div v-for="(artwork, index) in artWorks" :key="index"></div> -->
<div class="main-container-cta">
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
.main-container-cta{
  width: 100%;
  height: 40px;
  background-color: rgb(60, 238, 116);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: rgba(255,255,255, .9);
  text-shadow: 2px 2px rgba(0,0,0, .3);
  cursor: pointer;
}



/* @media screen and (max-width: 600px) {
  .main-container-toolbar {
    height: 100px;
  }
} */
</style>