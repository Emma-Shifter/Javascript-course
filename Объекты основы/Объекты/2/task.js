let schedule = {};

let isEmpty = function(obj){
    let count = 0;
    for (key in obj){
        count++;
    }
    return (count == 0);
}

alert( isEmpty(schedule) ); // true
schedule["8:30"] = "get up";
alert( isEmpty(schedule) ); // false
