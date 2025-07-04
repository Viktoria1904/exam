class Advantages {
	create() {
		let elem = document.createElement('section');
		elem.classList.add('advantages');

		let elemContainer = document.createElement('div');
		elemContainer.classList.add('container');
        
        let elemTitle = document.createElement('h2');
		elemTitle.classList.add('advantages__title');
        elemTitle.innerHTML='Наши преимущества'; 

        let elemList = document.createElement('ul');
		elemList.classList.add('advantages__list');

		elemList.innerHTML = `
			<li class="advantages__list_item">
				<img class="advantages__list_img" src='/src/images/advantages_img1.png' alt='image1'/>
				<h3 class="advantages__list_ttl">ГАРАНТИЯ ЛУЧШЕЙ ЦЕНЫ</h3>
                <p class="advantages__list_text">Мы производители, поэтому сможем предложить вам лучшую стоимость под ваш запрос.</p>
			</li>
            <li class="advantages__list_item">
				<img class="advantages__list_img" src='/src/images/advantages_img2.png' alt='image2'/>
                <h3 class="advantages__list_ttl">ОПЛАТА В РАССРОЧКУ</h3>
                <p class="advantages__list_text">Получи сейчас желаемую кухню без аванса и первоначального взноса, оплачивайте равными платежами в течение 12 месяцев.</p>
			</li>
            <li class="advantages__list_item">
				<img class="advantages__list_img" src='/src/images/advantages_img3.png' alt='image3'/>
               <h3 class="advantages__list_ttl">ГАРАНТИЯ ЛУЧШЕЙ ЦЕНЫ</h3>
                <p class="advantages__list_text">Произведем вашу кухню по индивидуальному проекту за 25 - 45 дней.</p>
			</li>
            <li class="advantages__list_item">
				<img class="advantages__list_img" src='/src/images/advantages_img4.png' alt='image4'/>
                <h3 class="advantages__list_ttl">ГАРАНТИЯ ЛУЧШЕЙ ЦЕНЫ</h3>
                <p class="advantages__list_text">Мы гарантируем 100% качество без брака. Проводим пробный монтаж кухни в цеху, проверяя тем самым ее качество и все детали.</p>
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

let advantagesElem = new Advantages().init();
let advantages = advantagesElem[0];

export {advantages};