import taskView from "./views/task-view.js";
import state from './model.js'
import { manageNumbers } from "./num-gen.js";
import keyboardView from "./views/keyboard-view.js";

export function keyboard(inputUser, action) { 
  newTaskRender(inputUser)
    
  if (action === 'submit'){
    state.setUserResult(+inputUser);
    taskView.confirmResult(state.correctResult === state.userResult, state.correctResult)
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
}

export function newTaskRender(inputUser = null){
  const randomNumbers = state.getRandomNumbers();  
  taskView.renderTask(state.getActiveIndex(), randomNumbers, inputUser)
}