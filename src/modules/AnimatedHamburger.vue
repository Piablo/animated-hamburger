<template>
  <div class="main-container-animatedhamburger">
    <div class="button-container-animatedhamburger" @click="hamburgerClick" v-if="!showMenu">
      <Button35>
        <Icon type="hamburger"></Icon>
      </Button35>
    </div>
     <div class="menu-container-animatedhamburger theme-color-2" @click="hamburgerClick" ref="menu">
      <component :is="currentMiniForm" @containerDims="childContainerDims" :loaded="animationComplete" @submitted="submitted"></component>
     </div>
  </div>
</template>



<script>
//Components
import Button35 from '../components/Button35.vue';
import Icon from '../components/Icon';
import MiniForm from '../components/MiniForm';

//MiniForms
import ChooseTheme from '../components/miniForms/ChooseTheme';
import PopulateTheme from '../components/miniForms/PopulateTheme';


//Services
//import {bus} from '@bit/piablo.lx-tech.bus';

//Vuex
import { mapGetters, mapMutations } from 'vuex';


//colors
//Blue1 rgb(0, 63, 226);
//Blue2 rgb(0, 2, 59);

export default {
  props: [
    'props'
  ],
  components: {
    Button35,
    Icon,
    MiniForm,

    'choose-theme':ChooseTheme,
    'populate-theme':PopulateTheme,
  },
  data(){
    return {
      showMenu: false,
      //formIndex: 0,
      //animatedForms: null,
      currentClass: 'change-size1',
      previousClass: 'change-size2',
      currentFromWidth: 25,
      currentFromHeight: 25,
      currentMiniForm: null,
      animationComplete: false,
    }
  },

  methods: {
    ...mapMutations(['incrementForms']),
    hamburgerClick(){
      if(!this.showMenu){
        this.showMenu = true;
        this.incrementForms();
      }
    },
    submitted(){
      this.incrementForms();
    },

    //Shows MiniForm Data once Animation Complete
    runAnimationTimer(){
      this.animationComplete = false
      setTimeout(function(){
        this.animationComplete = true
      }.bind(this), 1000)
    },

    childContainerDims(dims){
      this.runAnimationTimer();

      const fromWidth = this.currentFromWidth;
      const toWidth = dims.width;
      const fromHeight = this.currentFromHeight;
      const toHeight = dims.height;

      let root = document.documentElement;
      root.style.setProperty(`--fromWidth-${this.currentClass}`, (fromWidth + 'px'));
      root.style.setProperty(`--toWidth-${this.currentClass}`, (toWidth + 'px'));
      root.style.setProperty(`--fromHeight-${this.currentClass}`, (fromHeight + 'px'));
      root.style.setProperty(`--toHeight-${this.currentClass}`, (toHeight + 'px'));

      this.$refs.menu.classList.remove(this.previousClass);
      this.$refs.menu.classList.add(this.currentClass);

      //Reset
      let classHolder = this.currentClass;
      this.currentClass = this.previousClass;
      this.previousClass = classHolder;
      this.currentFromHeight = toHeight;
      this.currentFromWidth = toWidth;


    },
  },

  computed: mapGetters(['getAnimatedForms', 'getCurrentForm']),

  created(){
    //this.animatedForms = this.getAnimatedForms;
    // debugger
    // bus.$on("addFlashCardButtonComponent" + "onClick", (data) => {
    //   debugger;
    // })
  },

  watch: {
    showMenu(show){
      if(show){
        this.$refs.menu.style.display = 'inline-block';
      }
    },
    getCurrentForm(currentForm){
      this.currentMiniForm = currentForm
    }
  }
}
</script>

<style scoped>
:root{

}

.main-container-animatedhamburger{

}
.button-container-animatedhamburger{
  width: 35px;
  height: 35px;
  border-radius: 10px;
  
}
.menu-container-animatedhamburger{
  width: 35px;
  height: 35px;
  box-shadow: 2px 2px 4px rgba(0,0,0, .7), inset 2px 2px 4px rgba(255,255,255, .1);
  border-radius: 10px;
  display: none;
  z-index: 10;
}
.change-size1{
  animation: change1 1s forwards;
}
.change-size2{
  animation: change2 1s forwards;
}

@keyframes change1 {
  from {width: var(--fromWidth-change-size1); height: var(--fromHeight-change-size1);}
  to {width: var(--toWidth-change-size1); height:  var(--toHeight-change-size1);}
}

@keyframes change2 {
  from {width: var(--fromWidth-change-size2); height: var(--fromHeight-change-size2);}
  to {width: var(--toWidth-change-size2); height:  var(--toHeight-change-size2);}
}
</style>