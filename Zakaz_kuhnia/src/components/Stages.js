class Stages {
	create() {
		let elem = document.createElement('section');
		elem.classList.add('stages');

		let elemContainer = document.createElement('div');
		elemContainer.classList.add('container');
        
        let elemTitle = document.createElement('h2');
		elemTitle.classList.add('stages__title');
        elemTitle.innerHTML='Как выстроен процесс работы с нашими клиентами'; 

        let elemList = document.createElement('ul');
		elemList.classList.add('stages__list');

		elemList.innerHTML = `
			<li class="stages__list_item">
				<img class="stages__list_img" src='/src/images/stages_img1.png' alt='image1'/>
				<h3 class="stages__list_ttl">1 - Запись</h3>
                <p class="stages__list_text">Запишитесь на консультацию по телефону или онлайн</p>
			</li>
           <li class="stages__list_item">
				<img class="stages__list_img" src='/src/images/stages_img2.png' alt='image2'/>
				<h3 class="stages__list_ttl">2 - Замер</h3>
                <p class="stages__list_text">Снимем замеры стен и потолков, рекомендуем, как провести коммуникации, определим размещение секции</p>
			</li>
           <li class="stages__list_item">
				<img class="stages__list_img" src='/src/images/stages_img3.png' alt='image3'/>
				<h3 class="stages__list_ttl">3 - Дизайн</h3>
                <p class="stages__list_text">Дизайнер разрабатывает дизайн проект по вашим пожеланиям, подбирает материалы, учитывая планировку и ваш бюджет</p>
			</li>
           <li class="stages__list_item">
				<img class="stages__list_img" src='/src/images/stages_img4.png' alt='image4'/>
				<h3 class="stages__list_ttl">4 - Производство</h3>
                <p class="stages__list_text">Срок изготовления кухни от 25 дней</p>
			</li>
            <li class="stages__list_item">
				<img class="stages__list_img" src='/src/images/stages_img5.png' alt='image5'/>
				<h3 class="stages__list_ttl">5 - Монтаж</h3>
                <p class="stages__list_text">Быстро и качественно установим мебель и встраиваемую технику</p>
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

let stagesElem = new Stages().init();
let stages = stagesElem[0];

export {stages};