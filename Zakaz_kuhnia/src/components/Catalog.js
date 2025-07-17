class Catalog {
	create() {
		let elem = document.createElement('section');
		elem.classList.add('catalog');

		let elemContainer = document.createElement('div');
		elemContainer.classList.add('container');
        
        let elemTitle = document.createElement('h2');
		elemTitle.classList.add('catalog__title');
        elemTitle.innerHTML='Наши работы'; 

		let elemList = document.createElement('ul');
		elemList.classList.add('catalog__list');
		
		elemList.innerHTML = `
			<li class="catalog__list_item"> 
				<img class="catalog__list_img" src="/src/images/catalog_img1.png" alt="#"/>                
                <div class="catalog__list_text">
					<p class="catalog__list_title">Severin</p>
					<p class="catalog__list_price"><span>11654</span> лей/ месяц</p>
					<p class="catalog__list_dop">БЕЗ ПЕРВОГО ВЗНОСА - 12 месяцев</p>
				</div>				
			</li>
			<li class="catalog__list_item"> 
				<img class="catalog__list_img" src="/src/images/catalog_img2.png" alt="#"/>                
                <div class="catalog__list_text">
					<p class="catalog__list_title">Severin</p>
					<p class="catalog__list_price"><span>11654</span> лей/ месяц</p>
					<p class="catalog__list_dop">БЕЗ ПЕРВОГО ВЗНОСА - 12 месяцев</p>
				</div>
			</li>
			<li class="catalog__list_item"> 
				<img class="catalog__list_img" src="/src/images/catalog_img3.png" alt="#"/>                
                <div class="catalog__list_text">
					<p class="catalog__list_title">Severin</p>
					<p class="catalog__list_price"><span>11654</span> лей/ месяц</p>
					<p class="catalog__list_dop">БЕЗ ПЕРВОГО ВЗНОСА - 12 месяцев</p>
				</div>
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

let catalogElem = new Catalog().init();
let catalog = catalogElem[0];

export {catalog};