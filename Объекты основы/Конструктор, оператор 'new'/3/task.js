function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function() {
        let newNumber = +prompt("Введите число ", 0);
        this.value += newNumber;    
    };
}

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

alert(accumulator.value);