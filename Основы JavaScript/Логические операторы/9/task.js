let login = prompt("Введите логин: ");

if (login == '' || login == null){
    alert('Отменено')
}
else if (login != "Админ"){
    alert('Я вас не знаю')
}
else{
    let password = prompt("Введите пароль")
    if (password == "Я главный"){
        alert('Здравствуйте!')
    }
    else if (password == null){
        alert('Отменено')
    }
    else{
        alert('Неверный пароль')
    }
}