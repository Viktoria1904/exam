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
			<li class="about__list_item"> 
				<img class="about__list_img" src="/src/images/about_img1.png" alt="#"/>                
                <p class="about__list_text">Получите Консультацию И <span> Эскиз Мебели </span></p>
			</li>
			<li class="about__list_item">
				<img class="about__list_img" src="/src/images/about_img2.png" alt="#"/>  
				<p class="about__list_text">Подберем Материалы <span>Сочетая Цену И Качество</span></p>
			</li>
			<li class="about__list_item">
				<img class="about__list_img" src="/src/images/about_img3.png" alt="#"/>  
				<p class="about__list_text">Подберем Фурнитуру Для <span>Удобства И Комфорта</span></p>
			</li>
			<li class="about__list_item">
				<img class="about__list_img" src="/src/images/about_img4.png" alt="#"/>  
				<p class="about__list_text">Разработаем <span>Бесплатно 3D</span> Проект</p>
			</li>	
            <li class="about__list_item">
				<img class="about__list_img" src="/src/images/about_img5.png" alt="#"/>  
				<p class="about__list_text">Поможем <span>Сэкономить 20%</span> От Стоимости</p>
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