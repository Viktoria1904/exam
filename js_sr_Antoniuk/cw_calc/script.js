let calc = function() {

    let numA = document.querySelector("[name = 'calc_number_a']");
    let numB = document.querySelector("[name = 'calc_number_b']");
    let operation = document.querySelector("[name = 'calc_operation']");    
        
    let oper = function() {
        let result = '0';
        numA = +numA.value;
        numB = +numB.value; 
        operation = operation.value;

        switch(operation) {
            case 'add':
                result = numA + numB;
                break;
            case 'minus':
                result = numA - numB;
                break;
            case 'divide':
                if (numB == 0) { result = ('На ноль делить нельзя');
                } else {  
                result = numA / numB;
                };
                break;
            case 'multiply':
                result = numA * numB;
                break;
        };

            return result;
    }; 
        
    let show = function() {    
        let result = oper();
        let elem = document.querySelector('.calc__answer');
        elem.innerHTML = result;
    }  

    let btnCalc = document.querySelector('button');        
    btnCalc.addEventListener('click', function() {
        show();
    });

};

window.addEventListener('load', function() {
    calc();
});