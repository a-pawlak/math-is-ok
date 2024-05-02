import markups from "./markups.js";

class TaskView {

  renderTask(slide, randomNumbers, userNumber = ''){
    const parentElement = document.querySelector(`.slide-${slide}`);
    this.clear();
    parentElement.insertAdjacentHTML("afterbegin", markups.generateMarkup(slide));
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
    const commentEL = document.querySelector('.comment')
    const userInputEL = document.querySelector('.user-input')
    if (compare) {
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