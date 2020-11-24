<template>
  <div class="container-btn35">
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
.container-btn35{
  width: 35px;
  height: 35px;
  border-radius: 10px;
  box-shadow: 2px 2px 4px rgba(0,0,0, .7), inset 2px 2px 4px rgba(255,255,255, .1);
  cursor: pointer;
}
.container-btn35:hover{
  box-shadow: inset 2px 2px 4px rgba(0,0,0, .7), 2px 2px 4px rgba(255,255,255, .1);
}
</style>