<template>
<!-- <div v-for="(artwork, index) in artWorks" :key="index"></div> -->
<div class="container-toolbar theme-color-2">
  <div class="content-container-toolbar">
    <div class="content-placement-toolbar left-controls">
      <slot name="left-controls"></slot>
    </div>
    <div class="content-placement-toolbar">
      <slot name="center-controls"></slot>
    </div>
    <div class="content-placement-toolbar right-controls">
      <slot name="right-controls"></slot>
    </div>
  </div>
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

.container-toolbar{
  width: 100%;
  height: 55px;
  position: relative;
}
.content-container-toolbar{
  width: calc(100% - 20px);
  height: 35px;
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content-placement-toolbar{
  position: absolute;
  top: 0;
  height: 35px;
  z-index: 2;
}
.left-controls{
  left: 0;
}
.right-controls{
  right: 0;
}

/* @media screen and (max-width: 600px) {
  .main-container-toolbar {
    height: 100px;
  }
} */
</style>