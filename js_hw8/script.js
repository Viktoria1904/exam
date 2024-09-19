let html = document.querySelector('html');
html.setAttribute('lang','en');

let title = document.createElement('title');
title.innerHTML = 'hw8';
document.head.appendChild(title);

let metaUtf8 = document.createElement('meta');
metaUtf8.setAttribute('charset','UTF-8');
document.head.appendChild(metaUtf8);

let div_maket = document.createElement('div');
div_maket.classList.add('maket');
document.body.appendChild(div_maket);

let h_2 = document.createElement('h2');
h_2.innerHTML = 'Choose Your Option';
div_maket.appendChild(h_2);

let p = document.createElement('p');
p.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing ';
div_maket.appendChild(p);

let div_cont = document.createElement('div');
div_cont.classList.add('container');
div_maket.appendChild(div_cont);

let div_item = document.createElement('div');
div_item.classList.add('item');
div_cont.appendChild(div_item);

let div_lab = document.createElement('div');
div_lab.classList.add('label');
div_lab.innerHTML = 'FREELANCER';
div_item.appendChild(div_lab);

let h_3 = document.createElement('h3');
h_3.classList.add('h3_label');
h_3.innerHTML = 'Initially designed to';
div_item.appendChild(h_3);

let p_item = document.createElement('p');
p_item.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing ';
div_item.appendChild(p_item);

let button = document.createElement('button');
button.classList.add('button');
div_item.appendChild(button);

let a = document.createElement('a');
a.setAttribute('href','#');
a.innerHTML = 'START HERE';
button.appendChild(a);

let div_item2 = div_item.cloneNode(true);
div_cont.appendChild(div_item2);

let div_lab2 = div_lab.cloneNode(true);
div_lab2.innerHTML = 'STUDIO';
div_item2.insertBefore(div_lab2,div_item2.querySelector('h3'));

div_item2.removeChild(div_item2.querySelector('.label'));








let style = document.createElement('style');
style.innerHTML = `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    ul, ol {
        list-style: none;
    }

    body {
    
        height: 100%;
    }

    .maket {
        width: 60%;
        max-width: 800px;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        
    }

    .maket h2 {
        font-family: "Arvo", serif;
        font-size: 36px;
        font-weight: normal;
        line-height: 48px;
        color: #212121;
        margin-bottom: 10px;
    }

    .maket p {
        font-family: "Open Sans", sans-serif;
        font-size: 14px;
        line-height: 26px;
        color: #9fa3a7;
        margin-bottom: 50px;
    }

    .maket .container {     
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #e8e9ed;
        border-radius: 5px;
        overflow: hidden;
        
    }

    .maket .item {
        flex: 1 1;  
        padding: 80px 90px;
    }

    .maket .item .label {  
        margin-bottom: 20px; 
        font-family: "Montserrat", sans-serif;
        font-size: 12px;
        letter-spacing: 2.4px;
        font-weight: bold;
        text-transform: uppercase;
        color: #9fa3a7;
    }

    .maket .item h3 {
        margin-bottom: 25px;
        font-family: "Arvo", serif;
        font-size: 36px;
        font-weight: normal;
        line-height: 46px;
        color: #212121;
    }

    .maket .item .info {
        padding-bottom: 50px;
        font-family: "Open Sans", sans-serif;
        font-size: 12px;
        line-height: 22px;
        color: #9fa3a7;
    }

    .maket .item button {
        border: 0;
        background-color: transparent;
    }
    .maket .item a {
        padding: 17px 30px;
        display: inline-block;
        text-wrap: nowrap;
        font-family: "Montserrat", sans-serif;
        font-size: 12px;
        letter-spacing: 2.4px;
        font-weight: bold;
        text-transform: uppercase;
        color: #212121;
        text-decoration: none;
        border: 3px solid #ffc80a; 
        border-radius: 30px;
        cursor: pointer;
    }

    .maket .item a:hover {
        box-shadow: 0 0 10px hsl(298, 57%, 22%);
    } 

    .maket .item:hover {
        background-color: #8f75be;  
    }

    .maket .item:hover .label {
        color: #ffc80a;
    } 

    .maket .item:hover h3,
    .maket .item:hover .info,
    .maket .item:hover a {
        color: #fff;
    }
`;
document.head.appendChild(style);

