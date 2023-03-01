let limit = 10;
let check;
for (let i = 2; i < limit; i++){
    check = 0;
    for (let j = 2; j <= (i**(1/2)); j++){
        if (i % j == 0){
            check++;
        }
    }
    if (check == 0){
        alert(i);
    }
}