class LevelView {
  levelEl = document.querySelector('.menu--level-box');

  levelListener(handler){
    this.levelEl.addEventListener('click', function(e){
      handler(e.target.parentElement.firstElementChild.checked);
    }.bind(this))
  }
  freezeToggler() {
    this.levelEl.classList.toggle('freeze')
  }
}

export default new LevelView()