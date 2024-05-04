class KeyboardView {
  keyboardParentEl = document.querySelector('.keyboard')
  userInput = [];
  userNumber = '';

  keyboardListener(handler){
    this.keyboardParentEl.addEventListener('click', function(e) {
      const action = this.keyboardHandler(e);
      handler(this.userNumber, action);
    }.bind(this))
  }

  freezeKeyboard() {
    this.keyboardParentEl.classList.toggle('freeze')
  }

  keyboardHandler(e){
    const pressedEl = e.target.closest('.btn');
    if(!pressedEl)return
    if(pressedEl.dataset.number === 'clear') {
      if (this.userInput.length <= 0) return
      this.userInput.pop();
    }
    else if (pressedEl.dataset.number === 'submit') {
      if(this.userInput.length === 0) return
      this.freezeKeyboard();
      return 'submit'
    }
    else {
      if (this.userInput.length >=3) return 
      this.userInput.push(+pressedEl.dataset.number)
    }  
    this.userNumber =this.userInput.length > 0 ? this.userInput.slice().reverse().reduce((acc, cur, index)=>{
      return acc + (10 ** (index) * cur)
    }, 0)+ '': '';
  }
  clear(){
    this.userInput.length = 0;
    this.userNumber = '';

  }
}

export default new KeyboardView()