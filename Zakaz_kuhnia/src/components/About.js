class About {
	create() {
		let elem = document.createElement('section');
		elem.classList.add('about');

		let elemContainer = document.createElement('div');
		elemContainer.classList.add('container');
        
        let elemTitle = document.createElement('h2');
		elemTitle.classList.add('about__title');
        elemTitle.innerHTML='Все еще не можете определиться с выбором кухни?'; 
        
        let elemList = document.createElement('ul');
		elemList.classList.add('about__list');

		elemList.innerHTML = `
			<li class="about__list_item about__list_item1">                
                <p class="about__list_text">Получите Консультацию И <span> Эскиз Мебели </span></p>
			</li>
			<li class="about__list_item about__list_item2">
				Подберем Материалы <span>Сочетая Цену И Качество</span>
			</li>
			<li class="about__list_item about__list_item3">
				Подберем Фурнитуру Для <span>Удобства И Комфорта</span>
			</li>
			<li class="about__list_item about__list_item4">
				Разработаем <span>Бесплатно 3D</span> Проект
			</li>	
            <li class="about__list_item about__list_item5">
				Поможем <span>Сэкономить 20%</span> От Стоимости
			</li>
		`;
        
		elem.append(elemContainer);
        elemContainer.append(elemTitle,elemList);

		return [elem, elemContainer];
	}

    init() {
		let elems = this.create();
        
		return elems;
	}
}

let aboutElem = new About().init();
let about = aboutElem[0];

export {about};