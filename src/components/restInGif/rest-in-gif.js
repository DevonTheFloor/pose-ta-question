import { dCrEl } from "../../../tijak/helpers/myDomHelper";
import './rest-in-gif.scss';

export default class RestInGif extends HTMLElement {
  constructor() {
    super();
    const sec = dCrEl('section'),
      secId = this.getAttribute('secId'),
      ha3 = dCrEl('h3'),
      h3txt = this.getAttribute('h3txt'),
      fig = dCrEl('figure'),
      ima = dCrEl('img'),
      imaId = this.getAttribute('imaId');
      //srcImg = this.getAttribute('srcImg');
    
    sec.setAttribute('class','gif-sec');
    sec.setAttribute('id', secId);
    this.appendChild(sec);
    ha3.textContent = h3txt;
    ima.id = imaId;
    //ima.setAttribute('src',srcImg);
    sec.appendChild(ha3);
    sec.appendChild(fig);
    fig.appendChild(ima);
  }
  connectedCallback() {}
}

customElements.define('rest-in-gif', RestInGif);