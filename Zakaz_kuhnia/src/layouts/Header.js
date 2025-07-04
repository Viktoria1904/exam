//import { nav } from './Nav.js';
//import { cartWidget } from '../components/CartWidget.js';

class Header {
	create() {
		let elem = document.createElement('header');
		elem.classList.add('header');

		let elemContainer = document.createElement('div');
		elemContainer.classList.add('container');

		elem.append(elemContainer);

		return [elem, elemContainer];
	}

	createLogo() {
		let elem = document.createElement('div');
		elem.classList.add('header__logo');

		elem.innerHTML = `
		<a href="/"><img src="/src/images/logo.png" alt="logo"></a>
		`;

		return elem;
	}

	createNav() {
		let elem = document.createElement('nav');
		elem.classList.add('header__nav','nav');

		elem.innerHTML = `
		<ul class="header__nav_list">
			<li class="header__nav_item">
				<a class="header__nav_link" href="/">Главная</a>
			</li>
			<li class="header__nav_item">
				<a class="header__nav_link" href="#">О нас</a>
			</li>
			<li class="header__nav_item">
				<a class="header__nav_link" href="/#catalog/">Каталог</a>
			</li>
			<li class="header__nav_item">
				<a class="header__nav_link" href="#">Рассрочка</a>
			</li>
			<li class="header__nav_item">
				<a class="header__nav_link" href="#">Блог</a>
			</li>
			<li class="header__nav_item">
				<a class="header__nav_link" href="/#contacts/">Контакты</a>
			</li>
		</ul>
		`;

		return elem;
	}

	createTel() {
		let elem = document.createElement('button');
		elem.classList.add('header__tel');

		elem.innerHTML = `
			<a class="header__tel_link" href="tel:37368159759">+373 68 159 759</a>
			`

		//elem.append(elemContainer);

		return elem;
	}

	init() {
		let elems = this.create();
		let logoElem = this.createLogo();
		let navElem = this.createNav();
		let telElem = this.createTel();

		if (logoElem) elems[1].append(logoElem);
		if (navElem) elems[1].append(navElem);
		if (telElem) elems[1].append(telElem);
		
		//if (cartWidget) elems[1].append(cartWidget);

		return elems[0];
	}
}

let header = new Header().init();
export {header};