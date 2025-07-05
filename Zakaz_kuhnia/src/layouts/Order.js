class Order {
	create() {
		let elem = document.createElement('section');
		elem.classList.add('order');

        let elemContainer = document.createElement('div');
		elemContainer.classList.add('container');

        let elemTitle = document.createElement('h2');
		elemTitle.classList.add('order__title');
        elemTitle.innerHTML='Получите бесплатно дизайн проект кухни и консультацию дизайнера'; 

        let elemText = document.createElement('h3');
		elemText.classList.add('order__text');
        elemText.innerHTML='Вы узнаете точную <span>стоимость вашей кухни</span> и получите <span>3D-проект</span>'; 

        let elemForm = document.createElement('div');
        elemForm.classList.add('order__form');

        let elemInput = document.createElement('input');
        elemInput.classList.add('order__form_input');
        elemInput.type = 'text';
        elemInput.placeholder = 'Ваш Телефон'
      
        elem.append(elemContainer);
        elemContainer.append(elemTitle,elemText,elemForm);
        elemForm.append(elemInput);    
       
		return [elem, elemContainer,elemForm];
	}

    createBtn() {
        let elemBtn = document.createElement('button');
        elemBtn.classList.add('order__form_btn');
        elemBtn.innerHTML = 'Записаться';
        
        return elemBtn;
    }

	init() {
		let elems = this.create();
        let elemBtn = this.createBtn();

		if (elemBtn) elems[2].append(elemBtn);		

		return elems;
	}
}

let orderElems = new Order().init();
let order = orderElems[0];

export {order};