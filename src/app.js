import taskView from "./views/task-view.js";
import keyboardView from "./views/keyboard-view.js";
import * as handler from './handlers.js'
import state from './model.js'
import { numberGenerator } from "./num-gen.js";

const app = function(){
  const swiper = new Swiper(".mySwiper", {
    effect: "cube",
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.54,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });

manageNumbers(0);
taskView.renderTask(0, state.getRandomNumbers()) // initial view
  
function slideChangeHandler(){
  manageNumbers(swiper.activeIndex); 
  console.log(state.getRandomNumbers());
  keyboardView.clear();
  taskView.renderTask(swiper.activeIndex, state.getRandomNumbers());
  state.setActiveIndex(swiper.activeIndex)
 
}

swiper.on('slideChange', slideChangeHandler)

keyboardView.keyboardListener(handler.keyboard)
}

function manageNumbers(slide){
  state.setRandomNumbers(numberGenerator(slide, state.level))
  state.setCorrectResult(state.getRandomNumbers()[2])
}

app();

    