var SisKi = 228;
if (SisKi % 2 == 0) {
  console.log("иди нахуй");
}
let age = 8;
let discount = age < 18 ? "10%" : (age >= 18 && age <= 65) ? "20%" : age >= 65 ? "30%" : "сиебался" ;
console.log(discount)

let username = prompt("name");
let password = prompt("password");
switch (true){
    case (username === "terpila" && password === "228nikogoneprosim"):
        console.log("все норм");
        break;
        default:
            console.log("гандурас")
}
let price;
let ves = +prompt("укажите вес товара  в кг");
let kef = prompt("выберете пакет услуг (bomj) (sexpress) (lux) ");
if(ves < 2){
    price = 1000
}else if(ves >= 2 && ves <= 5){
    price = 5000
}else if(ves > 5){
    price = 15000
}
if(kef == "bomj"){
    price *= 1
}else if(kef == "sexpress"){
    price *= 1.5
}else if(kef == "lux"){
    price *= 2
}
console.log(`${price} tg`);