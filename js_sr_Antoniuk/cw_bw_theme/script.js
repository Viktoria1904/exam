let relay = function() {
   
    let elem = document.querySelector('.btn-toggle');
    if (!elem) return;    

    elem.addEventListener('click', function() {
            toggle();                               
        });

};

    let toggle = function() {    
        let body = document.body;
        
        if (!body.classList.contains('dark_theme')) {
            body.classList.add('dark_theme')
        } else {
            body.classList.remove('dark_theme')
        };
          
    };

window.addEventListener('load', function() {
    relay();
});