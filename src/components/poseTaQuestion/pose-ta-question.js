import { TagInComponent } from '../../../../tijak/builders/TagInComponent';

export default class PoseTaQuestion extends HTMLElement {
  constructor() {
    super();
    const tagAttribut = [
      {tag: 'h3', id: 'konet', class: 'explications', mout: this, attValue: this},
      {tag:'', id: '', class: '', mout: '', attValue: ''},
      
    ]
      const hach3 = new TagInComponent('h3','st1', 'sous-titre', this, this),
        baffe = new TagInComponent('img','baffe', 'animed-gif', this, this);
  }
}

customElements.define('pose-ta-question',PoseTaQuestion);