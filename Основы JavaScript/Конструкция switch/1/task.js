let browser = prompt("Введите браузер: ")
if (browser == "Edge"){
    alert( "You've got the Edge!" );
}
else if (browser == "Chrome" || browser == "Opera" || 
         browser == "Safari" || browser == "Firefox"){
    alert( 'Okay we support these browsers too' );
}
else{
    alert( 'We hope that this page looks ok!' );
}