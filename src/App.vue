<template>
<!-- <div v-for="(artwork, index) in artWorks" :key="index"></div> -->
  <div class="main-container-app">
    <div class="app-wrapper">
      <router-view/>
    </div>
  </div>
</template>



<script>
//Components
// import HelloWorld from '@/components/HelloWorld.vue'

//Services
//import {bus} from '@bit/piablo.lx-tech.bus';

//Vuex
import { mapActions } from 'vuex';


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
    ...mapActions(['requestAnimatedFormsList']),
    initializeAppData(){
      this.requestAnimatedFormsList();
    }
  },

  //computed: mapGetters(['allTodos']),

  created(){
    this.initializeAppData();
    // bus.$on("addFlashCardButtonComponent" + "onClick", (data) => {
    //   debugger;
    // })
  }
}
</script>

<style>
@import './globals/css/global.css';
body{
  padding: 0;
  margin: 0;;
}

.main-container-app{
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

}
.app-wrapper{
  width: 300px;
  height: 500px;
  border-radius: 20px;
  overflow: hidden;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  
}



/* @media screen and (max-width: 600px) {
  .main-container-toolbar {
    height: 100px;
  }
} */
</style>