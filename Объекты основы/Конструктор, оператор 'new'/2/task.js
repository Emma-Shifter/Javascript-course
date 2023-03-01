function Calculator(){
    this.read = function() {
        this.firstNumber = +prompt("Введите первое число ", 0);
        this.secondNumber = + prompt("Введите второе число ", 0);
    };

    this.mul = function() {
        return this.firstNumber * this.secondNumber;
    };

    this.sum = function() {
        return this.firstNumber + this.secondNumber;
    };
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );

