let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-Ролл");
styles[(styles.length-1) / 2] = "Классика";
let del = styles.shift();
alert(del)
styles.unshift("Реп", "Регги")
alert(styles)