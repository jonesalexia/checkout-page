var number = 0;
var number2 = 0;

function lessProduct1() {
  number--;
  setValue(number);
}

function moreProduct1() {
  number++;
  setValue(number);
}

function lessProduct2() {
    number2--;
    setValue2(number2);
  }
  
  function moreProduct2() {
    number2++;
    setValue2(number2);
  }

function setValue(value) {
  document.getElementById('qty').value = value;
}

function setValue2(value) {
    document.getElementById('qty-2').value = value;
}

setValue(number);
setValue2(number2);
