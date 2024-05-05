class State {
level = 0;
activeIndex = 0;

additionActiveEasy = 200;
subtractionActiveEasy = 0;
multiplicationActiveEasy = 0;
divisionActiveEasy = 0;
additionActiveHard = 200;
subtractionActiveHard = 0;
multiplicationActiveHard = 0;
divisionActiveHard = 0;

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
  if (data && data.date === this.getToday())this.stats = data;  
  if (data) {
    // save best results
    this.stats.level0.best.addition = data.level0.best.addition;
    this.stats.level1.best.addition = data.level0.best.addition;
    this.stats.level0.best.subtraction = data.level0.best.subtraction;
    this.stats.level1.best.subtraction = data.level0.best.subtraction;
    this.stats.level0.best.multiplication = data.level0.best.multiplication;
    this.stats.level1.best.multiplication = data.level0.best.multiplication;
    this.stats.level0.best.division = data.level0.best.division;
    this.stats.level1.best.division = data.level0.best.division;

    // get check avalability features
    this.subtractionActiveEasy = this.stats.level0.best.addition;
    this.multiplicationActiveEasy = this.stats.level0.best.subtraction;
    this.divisionActiveEasy = this.stats.level0.best.multiplication;
    this.subtractionActiveHard = this.stats.level1.best.addition;
    this.multiplicationActiveHard = this.stats.level1.best.subtraction;
    this.divisionActiveHard = this.stats.level1.best.multiplication;
  }
}

checkFeaturesAvalability(slide){
  const markers = [this.additionActiveEasy,
                  this.subtractionActiveEasy,
                  this.multiplicationActiveEasy,
                  this.divisionActiveEasy,
                  this.additionActiveHard ,
                  this.subtractionActiveHard,
                  this.multiplicationActiveHard,
                  this.divisionActiveHard
                ];
  return this.level === 0 ? markers[slide] >= 20 : markers[slide+4] >= 20;
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
      this.stats.level0.current.addition++;
      if (this.stats.level0.current.addition > this.stats.level0.best.addition) this.stats.level0.best.addition = this.stats.level0.current.addition;      
      this.subtractionActiveEasy = this.stats.level0.best.addition;
    }
    if (this.activeIndex === 1) {
      this.stats.level0.current.subtraction++;
      if (this.stats.level0.current.subtraction > this.stats.level0.best.subtraction) this.stats.level0.best.subtraction = this.stats.level0.current.subtraction; 
      this.multiplicationActiveEasy = this.stats.level0.best.subtraction;
    }
    if (this.activeIndex === 2) {
      this.stats.level0.current.multiplication++;
      if (this.stats.level0.current.multiplication > this.stats.level0.best.multiplication) this.stats.level0.best.multiplication = this.stats.level0.current.multiplication; 
      this.divisionActiveEasy = this.stats.level0.best.multiplication;
    }
    if (this.activeIndex === 3) {
      this.stats.level0.current.division++;
      if (this.stats.level0.current.division > this.stats.level0.best.division) this.stats.level0.best.division = this.stats.level0.current.division; 
    }
  }
  if (this.level === 1) {
    if (this.activeIndex === 0) {
      this.stats.level1.current.addition++;
      if (this.stats.level1.current.addition > this.stats.level1.best.addition) this.stats.level1.best.addition = this.stats.level1.current.addition; 
      this.subtractionActiveHard = this.stats.level1.best.addition;
  }
    if (this.activeIndex === 1) {
      this.stats.level1.current.subtraction++;
      if (this.stats.level1.current.subtraction > this.stats.level1.best.subtraction) this.stats.level1.best.subtraction = this.stats.level1.current.subtraction; 
      this.multiplicationActiveHard = this.stats.level1.best.subtraction;
    }
    if (this.activeIndex === 2) {
      this.stats.level1.current.multiplication++;
      if (this.stats.level1.current.multiplication > this.stats.level1.best.multiplication) this.stats.level1.best.multiplication = this.stats.level1.current.multiplication; 
      this.divisionActiveHard = this.stats.level1.best.multiplication;
    }
    if (this.activeIndex === 3) {
      this.stats.level1.current.division++
      if (this.stats.level1.current.division > this.stats.level1.best.division) this.stats.level1.best.division = this.stats.level1.current.division; 
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