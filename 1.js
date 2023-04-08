const tempCels = Number.parseFloat(prompt("Введите температуру в градусах цельсия : "));
alert(`${tempCels} градус по цельсию равен ${+tempFaren(tempCels).toFixed(2)} градус по фаренгейту`)

function tempFaren (a) {
    return 9 / 5 * a + 32
}