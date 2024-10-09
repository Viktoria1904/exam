const gallery = function() {
    
    let create = function() {

        let block = document.createElement('div');
        block.classList.add('blockBg');
        
        let elem = document.querySelector('.gallery__preview');
        elem.append(block);
        
        let btnClose = document.querySelector('.close');        
        btnClose.addEventListener('click', function() {
            remove();
        });        

        return elem;
    };

    let remove = function() {
        
        let itemBlock = document.querySelector('.blockBg');
        itemBlock.remove();

        let itemBtn = document.querySelector('.close');
        itemBtn.remove();
    };

    let show = function(content = null, src = null, type = null) {
        let elem= create();

        if (type == 'photo' && src) {
            let imgElem = document.createElement('img');
            imgElem.src = src;
            content = imgElem.outerHTML;

            if (content) {
                let contentElem = elem.querySelector('.blockBg');
                contentElem.innerHTML = content;
            };

        };

        document.body.append(elem);

    };

    let action = function(event) {
        event.preventDefault();
        
        let elem = event.target.closest('.thumbs');

        if (elem.tagName == 'A') {
            if (elem.children[0] && elem.children[0].tagName == 'IMG') {
                let href = elem.href;
            
                if (!href) return;

                show(null,href,'photo');
            };
        };
    };

    let elems = document.querySelectorAll('.gallery img');

    if (!elems || elems.length == 0) return;

    elems.forEach(function(item) {
        item.addEventListener('click', action);
    });

};

gallery(); 