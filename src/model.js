class State {
level = 1;

activeIndex = 0;

additionActive = true;
subtractionActive = false;
multiplicationActive = false;
divisionActive = false;

additionBestResult = 0;
subtractiopnBestResult = 0;
multiplicationBestResult = 0;
divisionBestResult = 0;

randomNumbers = [];
correctResult = 16;
userResult = 0;

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

}

export default new State()