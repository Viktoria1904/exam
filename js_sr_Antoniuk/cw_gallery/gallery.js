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
let elem = create();
console.log(elem);
    let remove = function() {
        console.log('remove');  
    };

    let show = function(content = null, src = null, type = null) {
        //remove();
        // let elems= create();

        

        console.log('show'); 
    };

    let action = function(event) {
        event.preventDefault();

        let elem = event.target.closest('.thumbs');

        if (elem.tagName == 'A') {
            if (elem.children[0] && elem.children[0].tagName == 'IMG') {
                let href = elem.href;
            
                if (href) return;

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

gallery('gallery'); 