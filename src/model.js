class State {
level = 0;
activeIndex = 0;

additionActive = true;
subtractionActive = false;
multiplicationActive = false;
divisionActive = false;

stats = {
  date: '',
  level0: {current: 
    {addition: 0, subtraction: 0, multiplication: 0, division: 0},
    best: {addition: 0, subtraction: 0, multiplication: 0, division: 0},
  }, 
  level1: {current: 
    {addition: 0, subtraction: 0, multiplication: 0, division: 0},
    best: {addition: 0, subtraction: 0, multiplication: 0, division: 0},
  }
}


randomNumbers = [];
correctResult = 16;
userResult = 0;

constructor(){
  const data = JSON.parse(localStorage.getItem('math-is-ok'));
  if (data.date === this.getToday()) this.stats = data  
}

setActiveIndex(curretIndex){
  this.activeIndex = curretIndex;
}
getActiveIndex(){
  return this.activeIndex
}
setUserResult(res){
  this.userResult = res;
}
getUserResult(){
  return this.userResult;
}
setCorrectResult(number){
  this.correctResult = number;
}
getCorrectResult(){
  return this.correctResult;
}
setRandomNumbers(arr){
  this.randomNumbers.length =0;
  arr.forEach(num => this.randomNumbers.push(num))
}
getRandomNumbers(){
  return this.randomNumbers;
}
setLevel(level) {
  this.level = level
}

getToday() {
    const today = new Date();
    const date = `${today.getFullYear()}.${today.getMonth()+1}.${today.getDate()}`;
    return date + '';
  }

saveStats(){
  this.stats.date = this.getToday();
  if (this.level === 0) {
    if (this.activeIndex === 0)  {
      this.stats.level0.current.addition++
      this.stats.level0.best.addition++
    }
    if (this.activeIndex === 1) {
      this.stats.level0.current.subtraction++
      this.stats.level0.best.subtraction++
    }
    if (this.activeIndex === 2) {
      this.stats.level0.current.multiplication++
      this.stats.level0.best.multiplication++
    }
    if (this.activeIndex === 3) {
      this.stats.level0.current.division++
      this.stats.level0.best.division++
    }
  }
  if (this.level === 1) {
    if (this.activeIndex === 0) {
      this.stats.level1.current.addition++
      this.stats.level1.best.addition++
  }
    if (this.activeIndex === 1) {
      this.stats.level1.current.subtraction++,
      this.stats.level1.best.subtraction++
    }
    if (this.activeIndex === 2) {
      this.stats.level1.current.multiplication++
      this.stats.level1.best.multiplication++
    }
    if (this.activeIndex === 3) {
      this.stats.level1.current.division++
      this.stats.level1.best.division++
  }
  }
  localStorage.setItem('math-is-ok', JSON.stringify(this.stats))
}

getStats(){
  if (this.level === 0) {
    if (this.activeIndex === 0) return [this.stats.level0.current.addition,
    this.stats.level0.best.addition]
    if (this.activeIndex === 1) return [this.stats.level0.current.subtraction,
    this.stats.level0.best.subtraction]
    if (this.activeIndex === 2) return [this.stats.level0.current.multiplication,
    this.stats.level0.best.multiplication]
    if (this.activeIndex === 3) return [this.stats.level0.current.division,
    this.stats.level0.best.division]
  }
  if (this.level === 1) {
    if (this.activeIndex === 0) return [this.stats.level1.current.addition,
    this.stats.level1.best.addition]
    if (this.activeIndex === 1) return [this.stats.level1.current.subtraction,
    this.stats.level1.best.subtraction]
    if (this.activeIndex === 2) return [this.stats.level1.current.multiplication,
    this.stats.level1.best.multiplication]
    if (this.activeIndex === 3) return [this.stats.level1.current.division,
    this.stats.level1.best.division]
  }
}

}

export default new State()