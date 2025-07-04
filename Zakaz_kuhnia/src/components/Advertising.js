class Advertising {
	create() {
		let elem = document.createElement('section');
		elem.classList.add('advertising');

        let elemContainer = document.createElement('div');
		elemContainer.classList.add('container');

        let elemContent = document.createElement('div');
        elemContent.classList.add('advertising__content');
      
        let elemTitle = document.createElement('h2');
		elemTitle.classList.add('advertising__title');
        elemTitle.innerHTML='Закажи кухню'; 

        let elemText1 = document.createElement('h3');
		elemText1.classList.add('advertising__text1');
        elemText1.innerHTML='И получи 10% скидку'; 

        let elemText2 = document.createElement('p');
		elemText2.classList.add('advertising__text2');
        elemText2.innerHTML='На всю бытовую технику в сети Bomba и Maximum';
        
        elem.append(elemContainer);
		elemContainer.append(elemContent);
        elemContent.append(elemTitle,elemText1,elemText2);

		return [elem, elemContent];
	}

    createBtn() {
        let elemBtn = document.createElement('button');
		elemBtn.classList.add('advertising__btn', 'btn');
        elemBtn.innerHTML='Заказать Кухню';
        
        return elemBtn;
    }

	init() {
		let elems = this.create();
        let elemBtn = this.createBtn();

		if (elemBtn) elems[1].append(elemBtn);		

		return elems;
	}
}

let advertisingElem = new Advertising().init();
let advertising = advertisingElem[0];

export {advertising};