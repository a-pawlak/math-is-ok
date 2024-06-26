import taskView from "./views/task-view.js";
import keyboardView from "./views/keyboard-view.js";
import * as handler from './handlers.js'
import state from './model.js'
import { manageNumbers } from "./num-gen.js";
import levelView from "./views/level-view.js";
import statsView from "./views/stats-view.js";
import resetView from "./views/reset-view.js";

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
  const featuresAvalabitity = state.checkFeaturesAvalability(swiper.activeIndex) ? swiper.activeIndex : (swiper.activeIndex + 3);
  taskView.renderTask(featuresAvalabitity, state.getRandomNumbers());
  state.setActiveIndex(swiper.activeIndex);
  if (!state.checkFeaturesAvalability(swiper.activeIndex)) return
  statsView.updateStats(...state.getStats());  
 
}

swiper.on('slideChange', slideChangeHandler)

keyboardView.keyboardListener(handler.keyboard)

levelView.levelListener(handler.levels);

resetView.resetListener();

resetView.modalListener(handler.resetHandler);

}



app();

    