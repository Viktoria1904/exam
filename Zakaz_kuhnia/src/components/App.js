import { header } from '../layouts/Header.js';
import {promo} from './Promo.js';
import {about} from './About.js';

import {advantages} from './Advantages.js';
import {advertising} from './Advertising.js';
import {order} from './Order.js';

import {stages} from './Stages.js';
import {employees} from './Employees.js';
import {info} from './Info.js';



//import { main, mainContainer, mainTitle } from '../layouts/Main.js';
//import { footer } from '../layouts/Footer.js';

//import { cartUpdate } from './Cart.js';

class App {
	constructor() {
		this.init();
	}	

	create() {
		let elem = document.createElement('div');
		elem.classList.add('app');

		return elem;
	}

	createHead() {
		let metaCharsetElem = document.createElement('meta');
		metaCharsetElem.setAttribute('charset', 'UTF-8');

		let metaVPElem = document.createElement('meta');
		metaVPElem.setAttribute('name', 'viewport');
		metaVPElem.setAttribute('content', 'width=device-width, initial-scale=1.0');

		let titleElem = document.createElement('title');
		titleElem.innerHTML = 'Store App';

		let linkElem = document.createElement('link');
		linkElem.rel = 'stylesheet';
		linkElem.href = '/src/index.css';

		let linkMediaElem = document.createElement('link');
		linkMediaElem.rel = 'stylesheet';
		linkMediaElem.href = '/src/media.css';

		let linkFontElem = document.createElement('link');
		linkFontElem.rel = 'stylesheet';
		linkFontElem.href = 'https://fonts.googleapis.com/css2?family=Commissioner:wght@100..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet';

		return {
			charset: metaCharsetElem,
			view: metaVPElem,
			title: titleElem,
			css: linkElem,
			media: linkMediaElem,
			font: linkFontElem
		};
	}

	// router() {
	// 	let getPage = async () => {
	// 		let page;

	// 		let hash = location.hash;

	// 		if (!hash) {
	// 			page = 'home';
	// 		} else {
	// 			hash = hash.slice(1);
				
	// 			let hashItems = hash.split('/');

	// 			if (hashItems[0]) page = hashItems[0];
	// 		}
			
	// 		if (!page) page = '404';

	// 		let timestamp = new Date().getTime();

	// 		let elem = await import(`../pages/${page}.js?v=${timestamp}`)
	// 		.then(module => {
	// 			mainTitle.innerHTML = '';
	// 			mainContainer.innerHTML = '';

	// 			document.title = module.pageTitle;

	// 			mainTitle.innerHTML = module.pageTitle;
	// 			mainContainer.append(module.page);
	// 		})
	// 	}

	// 	let links = document.querySelectorAll('a[href="/"]');

	// 	if (links) links.forEach((link) => {
	// 		link.addEventListener('click', (e) => {
	// 			e.preventDefault();

	// 			history.pushState(null, null, '/'); //при нажатии на ссылку на домашнюю страницу очищает адресную строку!
	// 			getPage();
	// 		})
	// 	});

	// 	window.addEventListener('hashchange', (e) => {
	// 		getPage();
	// 	})

	// 	getPage();		
	// }

	async render() {
		if (!this.elem) return;

		let headElems = this.createHead();

		if (header) this.elem.append(header);
		if (promo) this.elem.append(promo);
		if (about) this.elem.append(about);
		
		
		if (advantages) this.elem.append(advantages);
		if (advertising) this.elem.append(advertising);
		if (order) this.elem.append(order);
		if (stages) this.elem.append(stages);
		if (employees) this.elem.append(employees);
		if (info) this.elem.append(info);
		if (order) this.elem.append(order);
		
		// if (footer) this.elem.append(footer);

		document.head.append(headElems.charset, headElems.view, headElems.title, headElems.css, headElems.media, headElems.font);
		document.body.append(this.elem);
	}

	async init() {
		this.elem = this.create();
		await this.render();

		//cartUpdate();

		//this.router();
	}
}

export default new App();