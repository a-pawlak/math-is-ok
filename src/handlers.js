import taskView from "./views/task-view.js";
import state from './model.js'
import { manageNumbers } from "./num-gen.js";
import keyboardView from "./views/keyboard-view.js";
import statsView from "./views/stats-view.js";

export function keyboard(inputUser, action) { 
  newTaskRender(inputUser)
    
  if (action === 'submit'){
    state.setUserResult(+inputUser);
    const correctness = state.correctResult === state.userResult;
    taskView.confirmResult(correctness, state.correctResult)
    if (correctness) state.saveStats();
    statsView.updateStats(...state.getStats())
    setTimeout(function(){
      keyboardView.clear();
      manageNumbers(state.activeIndex);
      newTaskRender()
      
    }, 2000)
  }
}

export function levels(isEasy){
  state.setLevel(isEasy ? 0 : 1)
  manageNumbers(state.activeIndex);
  newTaskRender()
  statsView.updateStats(...state.getStats())
}

export function newTaskRender(inputUser = null){
  const randomNumbers = state.getRandomNumbers();  
  taskView.renderTask(state.getActiveIndex(), randomNumbers, inputUser)
  statsView.updateStats(...state.getStats())
}