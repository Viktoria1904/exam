import { promo } from './Promo.js';
import { about } from './About.js';

// import { payment } from './Payment.js';

import { advantages } from './Advantages.js';
import { advertising } from './Advertising.js';

import { stages } from './Stages.js';
import { employees } from './Employees.js';
import { info } from './Info.js';

class Page {
	constructor() {
		this.title = 'Home page';
	}

	create() {
		let elem = document.createElement('div');
		elem.classList.add('main__content','content');

		elem.innerHTML = 'Content home page';

		return elem;
	}

	init() {
		let elem = this.create();
		
		if (promo) this.elem.append(promo);
		if (about) this.elem.append(about);

		// if (payment) this.elem.append(payment);
		
		
		if (advantages) this.elem.append(advantages);
		if (advertising) this.elem.append(advertising);
		if (stages) this.elem.append(stages);
		if (employees) this.elem.append(employees);
		if (info) this.elem.append(info);

		return elem;
	}
}

let obj = new Page();
let elem = obj.init();
let elemTitle = obj.title;
export {elem as page, elemTitle as pageTitle};