function sumInput(){
    let arr = [];
    let sum = 0
    while(true){
        a = prompt("Введите первое число");
        if ((isFinite(a)) && (a !== null) && (a !== '')){
            arr.push(a);
            continue;
        }
        break;
    }
    
    for (let item of arr){
        sum += +item
    }
    return sum;
}

alert(sumInput());