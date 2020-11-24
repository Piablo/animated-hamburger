<template>
<!-- <div v-for="(artwork, index) in artWorks" :key="index"></div> -->
  <div class="main-container-icon">
    <div class="padded-container" ref="iconPath"></div>
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
    'type'
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
  },
  mounted(){
    let path = `url('../assets/icons/${this.type}.png');`;
    
    console.log(path)
    this.$refs.iconPath.style.backgroundImage = path
  }
}
</script>

<style scoped>
.main-container-icon{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.padded-container{
  width: calc(100% - 8px);
  height: calc(100% - 8px);
  background-image: url('../assets/icons/hamburger.png');
  background-size: cover;
}


/* @media screen and (max-width: 600px) {
  .main-container-toolbar {
    height: 100px;
  }
} */
</style>