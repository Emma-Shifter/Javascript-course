let calculator = {
    read(){
        this.firstNumber = +prompt("Введите первое число ", 0);
        this.secondNumber = +prompt("Введите второе число ", 0);
    }, 

    sum(){
        return this.firstNumber + this.secondNumber;
    }, 

    mul(){
        return this.firstNumber * this.secondNumber;
    }
}

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );