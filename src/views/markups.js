class Markups {
  markupList = [`
    <h2 class="header">Dodawanie</h2>
    <div class="wrapper">
      <span class="first-number">8</span>
      <span class="operator">+</span>
      <span class="second-number">8</span>
      <span class="equal-sign">=</span>
      <span class="user-input">16</span>
      <div class="comment">Doskonale!</div>
    </div>
    `, `
    <h2 class="header">Odejmowanie</h2>
    <div class="wrapper">
      <span class="first-number">8</span>
      <span class="operator">-</span>
      <span class="second-number">8</span>
      <span class="equal-sign">=</span>
      <span class="user-input">0</span>
      <div class="comment">Doskonale!</div>
    </div>
    `,`
    <h2 class="header">Mnożenie</h2>
    <div class="wrapper">
      <span class="first-number">8</span>
      <span class="operator">×</span>
      <span class="second-number">8</span>
      <span class="equal-sign">=</span>
      <span class="user-input">64</span>
      <div class="comment">Doskonale!</div>
    </div>
    `,`
    <h2 class="header">Dzielenie</h2>
    <div class="wrapper">
      <span class="first-number">8</span>
      <span class="operator">÷</span>
      <span class="second-number">8</span>
      <span class="equal-sign">=</span>
      <span class="user-input">1</span>
      <div class="comment">Doskonale!</div>
    </div>
    `]
  generateMarkup(slide){
    return this.markupList[slide]
}}

export default new Markups();