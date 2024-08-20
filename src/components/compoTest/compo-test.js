import { dCrEl } from '../../../tijak/helpers/myDomHelper';
import { TagInComponent }from '../../../tijak/builders/TagInComponent';
import { idsForCustomCompo } from '../../../tijak/builders/component-handlers';

// Create a class for the element
export default class CompoTest extends HTMLElement {
	constructor() {
		super();
		const myIds = idsForCustomCompo(this),
			//tiltre = new TagInComponent('h1','gros', 'voyant', this, this),
		 	para = new TagInComponent('p', 'pagraphe','textuel', this, this)
	}
}
customElements.define('compo-test', CompoTest);