class ResetView {
  resetEl = document.querySelector('.reset-icon');

  resetModalEl = document.querySelector('.reset-modal')

  resetListener(){
    this.resetEl.addEventListener('click', this.resetHandler.bind(this));
  }

  modalListener(handler){
    this.resetModalEl.addEventListener('click', function(e){
      this.modalHandler(e, handler);
    }.bind(this))
  }

  resetHandler(){
    this.resetEl.classList.toggle('reset-icon-active');
    this.resetModalEl.classList.toggle('reset-modal-active');   
  }

  modalHandler(e, handler){
    if (e.target.closest('.reset-modal--info')) {
      handler();
    };
    this.resetHandler();
    
  }
}
export default new ResetView();