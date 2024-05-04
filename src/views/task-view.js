import markups from "./markups.js";
import { priseList } from "../config.js";
import shuffle from "/node_modules/lodash-es/shuffle.js";

class TaskView {
  commentList = shuffle(priseList.slice())

  renderTask(slide, randomNumbers, userNumber = ''){
    const parentElement = document.querySelector(`.slide-${slide > 3 ? slide - 3 : slide}`);
    this.clear();
    parentElement.insertAdjacentHTML("afterbegin", markups.generateMarkup(slide));
    if(slide > 3) return
    parentElement.querySelector('.user-input').textContent = userNumber;
    parentElement.querySelector('.first-number').textContent = randomNumbers[0];
    parentElement.querySelector('.second-number').textContent = randomNumbers[1];
  }
  clear(){
    [0, 1, 2, 3].forEach(i=>{
      document.querySelector(`.slide-${i}`).innerHTML = '';
    })
  }
  confirmResult(compare, res){
    if (this.commentList.length <= 0) this.commentList = shuffle(priseList.slice())
    const comment = this.commentList.pop();
    const commentEL = document.querySelector('.comment')
    const userInputEL = document.querySelector('.user-input')
    if (compare) {
      commentEL.textContent = comment;
      commentEL.classList.add('correct-comment');
      userInputEL.classList.add('correct-input')
    }
    if (!compare) {
      commentEL.textContent = 'Prawidłowy wynik: ' + res;
      commentEL.classList.add('wrong-comment');
      userInputEL.classList.add('wrong-input')
    }
  }

  
}

export default new TaskView()