import { dCrEl } from "../../../tijak/helpers/myDomHelper";
import './rest-in-gif.scss';

export default class RestInGif extends HTMLElement {
  constructor() {
    super();
    const sec = dCrEl('section'),
      ha3 = dCrEl('h3'),
      h3txt = this.getAttribute('h3txt'),
      ima = dCrEl('img'),
      imaId = this.getAttribute('imaId');
    
    sec.setAttribute('class','gif-sec');
    this.appendChild(sec);
    ha3.textContent = h3txt;
    ima.id = imaId;
    sec.appendChild(ha3);
    sec.appendChild(ima)
   
  }

}

customElements.define('rest-in-gif', RestInGif);