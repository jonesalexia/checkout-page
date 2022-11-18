//initialising a variable name data
var data = 1;
  
//printing default value of data that is 0 in h2 tag
document.getElementsById("quantity").innerText = data;

//creation of increment function
function increment() {
     data = data + 1;
    document.getElementsById("quantity").innerText = data;
}

//creation of decrement function 
function decrement() {
    data = data - 1;
     document.getElementsById("quantity").innerText = data;
}
