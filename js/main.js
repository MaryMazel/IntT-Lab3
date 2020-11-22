function Calculator(){

    this.operations = {
        "+":(a,b)=>{ return +a+(+b)},
        "-":(a,b)=>{ return +a-(+b)},
        "/":(a,b)=>{ return +a/(+b)},
        "*":(a,b)=>{ return +a*(+b)},
        "**":(a,b)=>{ return (+a)**(+b)},
    }
    this.calculate = function(str){
        if (str.length > 0){
        let array = str.split(" ");
        let obj = this.operations[array[1]];
        return obj(array[0],array[2]);
        }
        return false;
    }
}

//Создание объекта типа Calculator
let Calc = new Calculator;


// Обработчики событий для кликов по кнопкам

let plus = document.querySelector('.calculator__plus');
plus.addEventListener('click',()=>{
    let val1 = document.querySelector('.calculator__val1').value;
    let val2 = document.querySelector('.calculator__val2').value;
    let result = Calc.calculate(val1 + " + " + val2);
    document.querySelector('.calculator__result').textContent = result;
});

let minus = document.querySelector('.calculator__minus');
minus.addEventListener('click',()=>{
    let val1 = document.querySelector('.calculator__val1').value;
    let val2 = document.querySelector('.calculator__val2').value;
    let result = Calc.calculate(val1 + " - " + val2);
    document.querySelector('.calculator__result').textContent = result;
});

let divide = document.querySelector('.calculator__divide');
divide.addEventListener('click',()=>{
    let val1 = document.querySelector('.calculator__val1').value;
    let val2 = document.querySelector('.calculator__val2').value;
    let result = Calc.calculate(val1 + " / " + val2);
    document.querySelector('.calculator__result').textContent = result;
});

let multiply = document.querySelector('.calculator__multiply');
multiply.addEventListener('click',()=>{
    let val1 = document.querySelector('.calculator__val1').value;
    let val2 = document.querySelector('.calculator__val2').value;
    let result = Calc.calculate(val1 + " * " + val2);
    document.querySelector('.calculator__result').textContent = result;
});

let power = document.querySelector('.calculator__power');
power.addEventListener('click',()=>{
    let val1 = document.querySelector('.calculator__val1').value;
    let val2 = document.querySelector('.calculator__val2').value;
    let result = Calc.calculate(val1 + " ** " + val2);
    document.querySelector('.calculator__result').textContent = result;
});

