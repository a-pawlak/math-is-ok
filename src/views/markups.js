class Markups {
  markupList = [`
    <h2 class="header">Dodawanie</h2>
    <div class="stats">
      <div class="stats--description">Dzisiaj:  <span>10</span>🪙</div>
      <div class="stats--description">Rekord:  <span>50</span>🪙</div>
    </div>
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
    <div class="stats">
      <div class="stats--description">Dzisiaj:  <span>10</span> 🪙</div>
      <div class="stats--description">Rekord:  <span>50</span> 🪙</div>
    </div>
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
    <div class="stats">
      <div class="stats--description">Dzisiaj:  <span>10</span> 🪙</div>
      <div class="stats--description">Rekord:  <span>50</span> 🪙</div>
    </div>
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
    <div class="stats">
      <div class="stats--description">Dzisiaj:  <span>10</span> 🪙</div>
      <div class="stats--description">Rekord:  <span>50</span> 🪙</div>
    </div>
    <div class="wrapper">
      <span class="first-number">8</span>
      <span class="operator">÷</span>
      <span class="second-number">8</span>
      <span class="equal-sign">=</span>
      <span class="user-input">1</span>
      <div class="comment">Doskonale!</div>
    </div>
    `,`
    <h2 class="header">Odejmowanie</h2>
    <div class="wrapper">
      Odblokuj zbierając 20🪙 za dodawanie!
    </div>
    `,`
    <h2 class="header">Mnożenie</h2>
    <div class="wrapper">
      Odblokuj zbierając 20🪙 za odejmowanie!
    </div>
    `,`
    <h2 class="header">Dzielenie</h2>
    <div class="wrapper">
      Odblokuj zbierając 20🪙 za mnożenie!
    </div>
    `]
  generateMarkup(slide){
    return this.markupList[slide]
}}

export default new Markups();