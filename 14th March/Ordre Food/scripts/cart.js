let cartArr = JSON.parse(localStorage.getItem("cart"));
// console.log("cartArr:", cartArr);

displayCartItems(cartArr);

function displayCartItems(cartArr) {
  document.querySelector("#cart").innerHTML = null;

  cartArr.map(function (el, ind) {
    let box = document.createElement("div");

    let image = document.createElement("img");
    image.src = el.strMealThumb;
    let title = document.createElement("p");
    title.textContent = el.strMeal;
    let price = document.createElement("p");
    price.textContent = el.price;
    let remove = document.createElement("button");
    remove.setAttribute("id", "remove");
    remove.textContent = "Remove";
    remove.addEventListener("click", function () {
      removeMe(ind);
    });
    box.append(image, title, price, remove);
    document.querySelector("#cart").append(box);
  });
}

totalPrice(cartArr);

function removeMe(ind) {
  cartArr.splice(ind, 1);
  displayCartItems(cartArr);
  localStorage.setItem("cart", JSON.stringify(cartArr));
  totalPrice(cartArr);
  console.log("cartArr:", cartArr);
  console.log("cartArr:", "Its working");
}

function totalPrice(arr) {
  let totalPrice = 0;
  for (let i = 0; i < arr.length; i++) {
    totalPrice += arr[i].price;
  }

  document.querySelector("#total-price").textContent = totalPrice;
}
