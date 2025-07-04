class Employees {
	create() {
		let elem = document.createElement('section');
		elem.classList.add('employees');

		let elemContainer = document.createElement('div');
		elemContainer.classList.add('container');
        
        let elemTitle = document.createElement('h2');
		elemTitle.classList.add('employees__title');
        elemTitle.innerHTML='Доверьте вашу кухню профессионалам'; 

        let elemList = document.createElement('ul');
		elemList.classList.add('employees__list');

		elemList.innerHTML = `
			<li class="employees__list_item">
				<img class="employees__list_img" src='/src/images/employees_img1.png' alt='image1'/>
				<h3 class="employees__list_ttl">Светлана</h3>
                <div class="employees__list_spec">Дизайнер</div>
                <p class="employees__list_text">"Кухня должна быть одновременно красивой и удобной". Любит сложные, нестандартные и яркие проекты.</p>
			</li>
           <li class="employees__list_item">
				<img class="employees__list_img" src='/src/images/employees_img2.png' alt='image2'/>
				<h3 class="employees__list_ttl">Татьяна</h3>
                <div class="employees__list_spec">Дизайнер</div>
                <p class="employees__list_text">Дизайнер с 20 летним опытом работы с мебелью. Работала на крупнейших молдавских фабриках, досконально разбирается в устройстве кухонь.</p>
			</li>
           <li class="employees__list_item">
				<img class="employees__list_img" src='/src/images/employees_img3.png' alt='image3'/>
				<h3 class="employees__list_ttl">Кристиан</h3>
                <div class="employees__list_spec">Дизайнер</div>
                <p class="employees__list_text">Опыт работы 5 лет. Художник, преподает в школе дизайна. Делает в кухнях акцент на эстетике и красоте.</p>
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

let employeesElem = new Employees().init();
let employees = employeesElem[0];

export {employees};