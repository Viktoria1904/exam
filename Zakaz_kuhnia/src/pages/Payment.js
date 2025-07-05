//import {info} from './Info.js';

class Page {
	constructor() {
		this.title = 'Payment page';
	}

	create() {
		let elem = document.createElement('div');
		elem.classList.add('main__content','content');

		elem.innerHTML = 'Content Payment page';

		return elem;
	}

	init() {
		let elem = this.create();
		
		//if (info) this.elem.append(info);

		return elem;
	}
}

let obj = new Page();
let elem = obj.init();
let elemTitle = obj.title;
export {elem as page, elemTitle as pageTitle};