import TagInComponents from '../../tijak/builders/TagInComponent';

export default class PoseTaQuestion extends HTMLElement {
  constructor() {
    super();
    const hach2 = new TagInComponents('h3','st1', 'sous-titre', this),
      baffe = new TagInComponents('img','baffe', 'animed-gif', this),
      hach3 = new TagInComponents('h3', 'st3', 'sous-titre', this),
      detente = new TagInComponents('img', 'detente', 'animated-gif', this);
  }
}

customElements.define('pose-ta-question',PoseTaQuestion);