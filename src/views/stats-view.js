class StatsView {
  updateStats(current, best){
    const currentStatElement = document.querySelector('.stats--description:first-child span')
    const bestStatElement = document.querySelector('.stats--description:last-child span')

    currentStatElement.textContent = current;
    bestStatElement.textContent = best;
  }
}

export default new StatsView()