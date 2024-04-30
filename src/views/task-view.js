import markups from "./markups";
class TaskView {
  renderTask(slide){
    const parentElement = document.querySelector(`.slide-${slide}`)
    this.clear();
    parentElement.insertAdjacentHTML("afterbegin", markups.generateMarkup(slide))
    
  }
  clear(){
    [0, 1, 2, 3].forEach(i=>{
      document.querySelector(`.slide-${i}`).innerHTML = '';
    })
  }
  
}

export default new TaskView()