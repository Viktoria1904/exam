class Missiia {
	create() {
		let elem = document.createElement('section');
		elem.classList.add('missiia');

		let elemContainer = document.createElement('div');
		elemContainer.classList.add('container');
        
        let elemTitle = document.createElement('h2');
		elemTitle.classList.add('missiia__title');
        elemTitle.innerHTML='Миссия Amatto'; 

        let elemText = document.createElement('p');
		elemText.classList.add('missiia__text');
        elemText.innerHTML='Мы стремимся создать идеальное пространство в котором человеку будет комфортно находиться, отдыхать, готовить и весело проводить время со своими друзьями и близкими.'; 
             
        let elemVideo = document.createElement('p');
		elemVideo.classList.add('missiia__video');
        elemVideo.innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/BohOY4zBEIA?si=STREilgB4QwMTIUN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'; 
            
			
        
		elem.append(elemContainer);
        elemContainer.append(elemTitle,elemText,elemVideo);

		return [elem, elemContainer];
	}

   	init() {
		let elems = this.create();
       
		return elems;
	}
}

let missiiaElem = new Missiia().init();
let missiia = missiiaElem[0];

export {missiia};