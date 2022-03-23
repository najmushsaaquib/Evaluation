document.querySelector("form").addEventListener("submit", placeOrder);
let int;

function placeOrder(event) {
  event.preventDefault();

  //   alert("Your order is accepted");
  int = setInterval(callback, 0);
  int2 = setInterval(callback2, 3000);
  int3 = setInterval(callback3, 8000);
  int4 = setInterval(callback4, 10000);
  int5 = setInterval(callback5, 12000);
}

function callback() {
  alert("Your order is accepted");
  clearInterval(int);
}

function callback2() {
  alert("Your order is being cooked");
  clearInterval(int2);
}

function callback3() {
  alert("Your order is ready");
  clearInterval(int3);
}

function callback4() {
  alert("Order out for delivery");
  clearInterval(int4);
}

function callback5() {
  alert("Order delivered");
  clearInterval(int5);
}
