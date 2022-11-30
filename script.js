function addQty() {
  let el = document.getElementById("qty");
  let value = parseInt(el.text);
  value += 1;
  el.text = value;
  updateCart();
}

function addQty2() {
  let el = document.getElementById("qty-2");
  let value = parseInt(el.text);
  value += 1;
  el.text = value;
  updateCart();
}

function removeQty() {
  let el = document.getElementById("qty");
  let value = parseInt(el.text);
  if (value > 0) {
    value -= 1;
    el.text = value;
  }
  updateCart();
}

function removeQty2() {
  let el = document.getElementById("qty-2");
  let value = parseInt(el.text);
  if (value > 0) {
    value -= 1;
    el.text = value;
  }
   updateCart();
}

function updateCart() {
  let total = 0;
  let el = document.getElementById("qty");
  let value = parseInt(el.text);
  let totalPrice = document.getElementById("price1");
  let priceTotal = parseFloat(totalPrice.textContent);
  total += value * priceTotal;
  const totalCst = document.getElementById("t-price").textContent = '$' + total.toFixed(2);

  let total2 = 0;
  let el2 = document.getElementById("qty-2");
  let value2 = parseInt(el2.text);
  let totalPrice2 = document.getElementById("price2");
  let priceTotal2 = parseFloat(totalPrice2.textContent);
  total2 += value2 * priceTotal2;
  const totalCst2 = document.getElementById("t-price").textContent = '$' + total2.toFixed(2);

  let totalize = total + total2;
  const totalcst3 = document.getElementById("t-price").textContent = '$' + totalize.toFixed(2);
}
