/*
Чайник. Возможные методы: ввод инф. о чайнике (мощность, объем, кол-во воды),
вкл./выкл., расчет времени закипания воды.
*/

let Kettles = function(brand, power, volume) {    
        this.brand = brand;
        this.power = power;
        this.volume = volume;
        this.status = false;
        this.timeStart = null;
        this.timeEnd = null;
        this.timeDiff = null;

        this.show = function() {
            document.write(`<b>${this.brand}:</b> ${this.power} Вт, ${this.volume} л <br>`);
            this.timeKip();

            
            let time = this.time / 1200;
            let sum = this.price(0.47, time);
            document.write(`<br> - стоимость за электроэнергию ${sum} б.р <br>`)
        };

        this.on = function() {
            this.status = true;
            this.timeStart = new Date().getTime();
            this.timeEnd = null;
        },

        this.off = function() {
            this.status = false;
            this.timeEnd = new Date().getTime();
        },

        this.price = function(tarif,time) {
            let sum = (tarif * this.power / 1000 * time).toFixed(2);   
            return sum;             
        },

        this.showTime = function() {
            let timeStart = new Date(this.timeStart);
            let timeEnd = new Date(this.timeEnd);

            let timeDiff = ((timeEnd - timeStart) / 1000 / 1200).toFixed(3);
            this.timeDiff = timeDiff;

            console.log(`время работы чайника ${timeDiff} ч.`);  

            let tarif = +prompt('Введите тариф в б.р.')
            let sum = this.price(tarif, timeDiff);
            
            console.log(`за электричество за это время заплатите ${sum} б.р.`)
            
        },       

        this.timeKip = function() {
            let power = +this.power;
            let volume = +this.volume;
            let t = 4200 * 1000 * volume / 1000 * 100 / power;
            document.write(` - разогрев воды целого чайника до кипения за ${(t/60).toFixed(2)} мин `);
            this.time = t;
        }   
    
}
 
let kettle1 = new Kettles('Xiaomi',1800,1.5);
kettle1.show();

let kettle2 = new Kettles('Kitfort',2200,1.7);
kettle2.show();

let kettle3 = new Kettles('Tefal',2000,2.0);
kettle3.show();

