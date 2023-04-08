const tempCels = Number.parseFloat(prompt("Введите температуру в градусах цельсия : "));
alert(`${tempCels} градус по цельсию равен ${tempFaren(tempCels)} градус по фаренгейту`);

function tempFaren(tempCels) {
    return (+(9 / 5 *  tempCels + 32).toFixed(2));
}