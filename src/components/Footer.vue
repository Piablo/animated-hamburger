<template>
  <div class="container-footer theme-color-2"></div>
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
.container-footer{
  width: 100%;
  height: 55px;
  position: absolute;
  bottom:0;
}
</style>