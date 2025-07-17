class Payment {
	create() {
		let elem = document.createElement('section');
		elem.classList.add('payment');

		let elemContainer = document.createElement('div');
		elemContainer.classList.add('container');
        
        let elemTitle = document.createElement('h2');
		elemTitle.classList.add('payment__title');
        elemTitle.innerHTML='Покупай в рассрочку!'; 
        
        let elemBlock = document.createElement('div');
		elemBlock.classList.add('payment__block');

        let elemList = document.createElement('ul');
		elemList.classList.add('payment__left');

        let elemItem1 = document.createElement('li');
		elemItem1.classList.add('payment__left_item');
        elemItem1.innerHTML = `
            <p class="payment__left_text1">Ваша новая кухня без денег и предоплаты!</p>
        `;

        let elemItem2 = document.createElement('li');
		elemItem2.classList.add('payment__left_item', 'payment__left_item2');
        elemItem2.innerHTML = `
            <p class="payment__left_text2">Рассрочка 12 месяцев</p>
            <p class="payment__left_text2">Без Комиссии И Процентов</p>
        `;

        let elemItem3 = document.createElement('li');
		elemItem3.classList.add('payment__left_item');       
        let elemText3 = document.createElement('p');
		elemText3.classList.add('payment__left_text');
        elemText3.innerHTML = 'Ваш Бюджет € : '
        let elemBudget = document.createElement('input');
		elemBudget.classList.add('payment__left_input');
        elemBudget.placeholder = '3000';
       
        let elemItem4 = document.createElement('li');
		elemItem4.classList.add('payment__left_item');       
        let elemText4 = document.createElement('p');
		elemText4.classList.add('payment__left_text');
        elemText4.innerHTML = 'Промежуток Рассрочки В Месяцах :'
        let elemMonth = document.createElement('input');
		elemMonth.classList.add('payment__left_input', 'month');
        elemMonth.placeholder = '6';

        let elemItem5 = document.createElement('li');
		elemItem5.classList.add('payment__left_item');       
        let elemText5 = document.createElement('p');
		elemText5.classList.add('payment__left_text');
        elemText5.innerHTML = 'Первоначальный Взнос % :'
        let elemInitial = document.createElement('input');
		elemInitial.classList.add('payment__left_input', 'initial');
        elemInitial.placeholder = '10%';

        let elemItem6 = document.createElement('li');
		elemItem6.classList.add('payment__left_item', 'payment__left_item6');       
        let elemText6 = document.createElement('button');
		elemText6.classList.add('payment__left_text6');
        elemText6.innerHTML = 'ЕЖЕМЕСЯЧНЫЙ ПЛАТЁЖ:'
        let elemSum = document.createElement('p');
		elemSum.classList.add('payment__left_sum');
        elemSum.innerHTML = '450';

        let elemItem7 = document.createElement('li');
		elemItem7.classList.add('payment__left_item7');       
        let elemName = document.createElement('input');
		elemName.classList.add('payment__left_form','payment__left_name');
        elemName.placeholder = 'Ваше имя';
        let elemPhone = document.createElement('input');
		elemPhone.classList.add('payment__left_form','payment__left__phone');
        elemPhone.placeholder = 'Ваш телефон';

        let elemItem8 = document.createElement('li');
		elemItem8.classList.add('payment__left_item8');
        elemItem8.innerHTML = `
            <button class="payment__left_btn">Отправить заявку на рассрочку</button>
        `;

        let elemImage = document.createElement('div');
		elemImage.classList.add('payment__right');
        elemImage.innerHTML = `
            <img class="payment__right_img" src="/src/images/payment_img.png" alt="#"/> 
        `;

        
		elem.append(elemContainer);
        elemContainer.append(elemTitle,elemBlock);
        elemBlock.append(elemList,elemImage);
        elemList.append(elemItem1,elemItem2,elemItem3,elemItem4,elemItem5,elemItem6,elemItem7,elemItem8);
        elemItem3.append(elemText3,elemBudget);
        elemItem4.append(elemText4,elemMonth);
        elemItem5.append(elemText5,elemInitial);
        elemItem6.append(elemText6,elemSum);
        elemItem7.append(elemName,elemPhone);     
        
		return [elem, elemContainer];
	}

    init() {
		let elems = this.create();
     
		return elems;
	}
}

let paymentElem = new Payment().init();
let payment = paymentElem[0];

export { payment };