import taskView from "./views/task-view.js";
import keyboardView from "./views/keyboard-view.js";
import * as handler from './handlers.js'
import state from './model.js'
import { manageNumbers } from "./num-gen.js";
import levelView from "./views/level-view.js";
import statsView from "./views/stats-view.js";

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
statsView.updateStats(...state.getStats())
  
function slideChangeHandler(){
  manageNumbers(swiper.activeIndex); 
  keyboardView.clear();
  taskView.renderTask(swiper.activeIndex, state.getRandomNumbers());
  state.setActiveIndex(swiper.activeIndex)
  statsView.updateStats(...state.getStats())
 
}

swiper.on('slideChange', slideChangeHandler)

keyboardView.keyboardListener(handler.keyboard)

levelView.levelListener(handler.levels)

}



app();

    