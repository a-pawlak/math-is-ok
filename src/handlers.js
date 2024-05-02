import taskView from "./views/task-view.js";
import state from './model.js'
import { numberGenerator } from "./num-gen.js";

export function keyboard(inputUser, action) { 
  const randomNumbers = state.getRandomNumbers();  
  taskView.renderTask(state.getActiveIndex(), randomNumbers, inputUser)
    
  if (action === 'submit'){
    state.setUserResult(+inputUser);
    taskView.confirmResult(state.correctResult === state.userResult, state.correctResult)
  }
  
}