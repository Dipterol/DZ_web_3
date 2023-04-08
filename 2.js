const name = prompt("Введите ваше имя :");
alert(`${greeting(name)}`);

function greeting (a) {
    return (`Приве, ${a} !`);
}