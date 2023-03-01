let readNumber = function() {
    let number;
    do{
        number = prompt("Введите число ", 0);
    }
    while((isFinite(number) == false))

    return (number === null || number === "") ? null : +number;
}
alert(readNumber());