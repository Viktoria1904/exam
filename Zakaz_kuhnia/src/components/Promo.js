class Promo {
	create() {
		let elem = document.createElement('section');
		elem.classList.add('promo');

		let elemContainer = document.createElement('div');
		elemContainer.classList.add('container');
        
        let elemTitle = document.createElement('h1');
		elemTitle.classList.add('promo__title');
        elemTitle.innerHTML='Кухни на заказ'; 

        let elemText = document.createElement('p');
		elemText.classList.add('promo__text');
        elemText.innerHTML='Стильная кухня от производителя по цене на 20% ниже рынка';
        
        let elemList = document.createElement('ul');
		elemList.classList.add('promo__list');

		elemList.innerHTML = `
			<li class="promo__list_item">
				<img class="promo__list_heart" src='/src/images/promo_list_heart.png' alt='heart'/>
				<span> Бесплатный </span> дизайн проект
			</li>
			<li class="promo__list_item">
				<img class="promo__list_heart" src='/src/images/promo_list_heart.png' alt='heart'/>
				Гарантия <span>лучшей Цены</span>
			</li>
			<li class="promo__list_item">
				<img class="promo__list_heart" src='/src/images/promo_list_heart.png' alt='heart'/>
				Производство от <span>25 до 45 дней</span>
			</li>
			<li class="promo__list_item">
				<img class="promo__list_heart" src='/src/images/promo_list_heart.png' alt='heart'/>
				Гарантийное <span>обслуживание 5 лет<span>
			</li>			
		`;
        
		elem.append(elemContainer);
        elemContainer.append(elemTitle,elemText,elemList);

		return [elem, elemContainer];
	}

    createBtn() {
        let elemBtn = document.createElement('button');
		elemBtn.classList.add('promo__btn', 'btn');
        elemBtn.innerHTML='Бесплатная Консультация Дизайнера';
        
        return elemBtn;
    }

	init() {
		let elems = this.create();
        let elemBtn = this.createBtn();

		if (elemBtn) elems[1].append(elemBtn);		

		return elems;
	}
}

let promoElem = new Promo().init();
let promo = promoElem[0];
let promoContainer = promoElem[1];

export {promo};