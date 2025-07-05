class Footer {
	create() {
		let elem = document.createElement('footer');
		elem.classList.add('footer');

		let elemContainer = document.createElement('div');
		elemContainer.classList.add('container');

		let elemBlock1 = document.createElement('div');
		elemBlock1.classList.add('footer_block1');

		let elemBlock2 = document.createElement('div');
		elemBlock2.classList.add('footer_block2');

		elemContainer.append(elemBlock1,elemBlock2);
		elem.append(elemContainer);

		return [elem, elemContainer,elemBlock1,elemBlock2];
	}

	createLogo() {
		let elem = document.createElement('div');
		elem.classList.add('footer__logo');

		elem.innerHTML = `
		<a class="footer__logo_img" href="/"><img src="/src/images/logo.png" alt="logo"></a>
		<p class="footer__logo_text">При создании кухни наши дизайнеры учитывают пожелания клиента, дополняя их своими идеями что бы сделать кухню еще лучше! Понравился дизайн? Напиши нам или закажи консультацию дизайнера amatto.</p>
		`;

		return elem;
	}

	createNav() {
		let elem = document.createElement('nav');
		elem.classList.add('footer__nav');

		elem.innerHTML = `
		<h3 class="footer__title">Links</h3>
		<ul class="footer__nav_list">
			<li class="footer__nav_item">
				<a class="footer__nav_link" href="/">Главная</a>
			</li>
			<li class="footer__nav_item">
				<a class="footer__nav_link" href="#">О нас</a>
			</li>
			<li class="footer__nav_item">
				<a class="footer__nav_link" href="/#catalog/">Каталог</a>
			</li>
			<li class="footer__nav_item">
				<a class="footer__nav_link" href="#">Рассрочка</a>
			</li>
			<li class="footer__nav_item">
				<a class="footer__nav_link" href="#">Блог</a>
			</li>
			<li class="footer__nav_item">
				<a class="footer__nav_link" href="/#contacts/">Контакты</a>
			</li>
		</ul>
		`;

		return elem;
	}

	createSocial() {
		let elem = document.createElement('social');
		elem.classList.add('footer__social');

		elem.innerHTML = `
		<h3 class="footer__title">Social Links</h3>
		<ul class="footer__social_list">
			<li class="footer__social_item">
				<a class="footer__social_link" href="https://ru-ru.facebook.com"><img src="/src/images/ico_fb.png" alt="fb"></a>
			</li>
			<li class="footer__social_item">
				<a class="footer__social_link" href="https://www.linkedin.com/"><img src="/src/images/ico_in.png" alt="in"></a>
			</li>
			<li class="footer__social_item">
				<a class="footer__social_link" href="https://www.instagram.com"><img src="/src/images/ico_insta.png" alt="insta"></a>
			</li>
			<li class="footer__social_item">
				<a class="footer__social_link" href="https://www.viber.com/ru/"><img src="/src/images/ico_viber.png" alt="viber"></a>
			</li>
			<li class="footer__social_item">
				<a class="footer__social_link" href="https://www.youtube.com/"><img src="/src/images/ico_yt.png" alt="youtube"></a>
			</li>
			<li class="footer__social_item">
				<a class="footer__social_link" href="https://www.whatsapp.com"><img src="/src/images/ico_whatsapp.png" alt="whatsapp"></a>
			</li>
		</ul>
		`;

		return elem;
	}

	createContacts() {
		let elem = document.createElement('div');
		elem.classList.add('footer__contacts');

		elem.innerHTML = `
		<h3 class="footer__title">Republic of Moldova</h3>
		<ul class="footer__contacts_list">
		<li class="footer__contacts_item">
			<img class="footer__contacts_ico" src="/src/images/footer_loc.png" alt="location">
			<a class="footer__contacts_link" target="_blank" href="https://www.google.com/maps/place/2,+15,+Strada+Trandafirilor+15,+Chi%C8%99in%C4%83u,+%D0%9C%D0%BE%D0%BB%D0%B4%D0%BE%D0%B2%D0%B0/@46.9978864,28.8492609,17z/data=!3m1!4b1!4m5!3m4!1s0x40c97ea8b4d59c7d:0x211cfb6ef54aed77!8m2!3d46.9978864!4d28.8518358?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D">Chisinau,15/2 Trandafirilor Str.</a>
		</li>
		<li class="footer__contacts_item">
			<img class="footer__contacts_ico" src="/src/images/footer_tel.png" alt="phone">
			<a class="footer__contacts_link" href="tel:375291111111">+373 68 159 759</a>
		</li>
		<li class="footer__contacts_item">
			<img class="footer__contacts_ico" src="/src/images/footer_mail.png" alt="letter">
			<a class="footer__contacts_link" href="mailto:info@example.com">hello@amatto.md</a>
		</li>
		`;

		return elem;
	}

	createBlock2() {
		let elem = document.createElement('div');
		elem.classList.add('footer__text');
		elem.innerHTML = '© 2022 Amatto. All Rights Reserved.';

		return elem;
	}

	init() {
		let elems = this.create();

		let logoElem = this.createLogo();
		let navElem = this.createNav();
		let contactsElem = this.createContacts();
		let socialElem = this.createSocial();

		let block2 = this.createBlock2();

		if (logoElem) elems[2].append(logoElem);
		if (navElem) elems[2].append(navElem);
		if (contactsElem) elems[2].append(contactsElem);
		if (socialElem) elems[2].append(socialElem);
		if (block2) elems[3].append(block2);

		return elems[0];
	}
}

let footer = new Footer().init();
export {footer};