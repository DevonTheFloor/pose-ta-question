import { dCrEl } from '../../../tijak/helpers/myDomHelper';
import styles from './my-header.scss';

// Create a class for the element
export default class MyHeader extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();
    // Create a shadow root
    //const shadow = this.attachShadow({mode: 'open'});
    const myheader = dCrEl('header');
    this.appendChild(myheader);
      //creat <h1></h1>
      const h1 = dCrEl('h1');
      myheader.id ="header-id"
      myheader.appendChild(h1);
      let h1title= this.getAttribute('h1title');
      h1.textContent = h1title;      
      myheader.appendChild(h1);
      const img = dCrEl('img');
      img.id ="hero";
      myheader.appendChild(img);
    
    }
  }
  customElements.define('my-header', MyHeader);