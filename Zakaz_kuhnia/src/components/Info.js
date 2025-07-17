class Info {
	create() {
		let elem = document.createElement('section');
		elem.classList.add('info');

		let elemContainer = document.createElement('div');
		elemContainer.classList.add('container');
        
        let elemTitle = document.createElement('h2');
		elemTitle.classList.add('info__title');
        elemTitle.innerHTML='Четыре ошибки при выборе кухни'; 

        let elemList = document.createElement('ul');
		elemList.classList.add('info__list');

		// let elemItem = document.createElement('li');
		// elemItem.classList.add('info__list_item');

		// переделать, выделить кнопку для перехода на другую страницу

		elemList.innerHTML = `
			<li class="info__list_item">
				<h2 class="info__list_number">1</h2>
				<h3 class="info__list_ttl">Сделаю проект сам или мне разработали на бумажке</h3>
                <p class="info__list_text">Не удобно расположены зоны складирования, не предусмотрено место для хранения, не удобно и раздражает</p>
			</li>
            <li class="info__list_item">
				<h2 class="info__list_number">2</h2>
				<h3 class="info__list_ttl">Нет договора и описания, что входит в стоимость</h3>
                <p class="info__list_text">Фурнитура низкого качества, нет гарантии качества, при браке нет с кого спросить, получаете не то, за что платили</p>
			</li>
            <li class="info__list_item">
				<h2 class="info__list_number">3</h2>
				<h3 class="info__list_ttl">Частный мастер</h3>
                <p class="info__list_text">Не соблюдение технологии изготовления, сроки и качество не указаны, через 6 месяцев требуется замена материалов</p>
			</li>
            <li class="info__list_item">
				<h2 class="info__list_number">4</h2>
				<h3 class="info__list_ttl">Известная компания или бренд</h3>
                <p class="info__list_text">Не удобно расположены зоны складирования, не предусмотрено место для хранения, не удобно и раздражает</p>
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

let infoElem = new Info().init();
let info = infoElem[0];

export {info};