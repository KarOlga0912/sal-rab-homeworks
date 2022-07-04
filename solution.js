function addInCartMessage(title, price) {
    let productName = title;
    let productPrice = price;
    let message = productName;

    message = message + " ";
    message = message + "за";
    message = message + " ";
    message = message + productPrice;
    message = message + " ";
    message = message + "теперь в корзине!";

    console.log(message);

    return message;
}


function addInCartCountChange(value) {

    // Задание №1.2. Увеличение количества в корзине
    let oldValue = value;
    let newValue = oldValue;
      
    newValue = newValue + 1;
 
    return newValue;
}

function addInCartSumChange(sum, delta) {
    let oldSum = sum;
    let difference = delta;
       
  newSum = oldSum + difference;
  newSumText = newSum + ' ₽';
  newSumText = `${newSum} ₽`;

    return newSumText;
}

