/* global Cart */
"use strict";

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById("cart");
table.addEventListener("click", removeItemFromCart);
let cart;

let tBodyElement = document.getElementsByTagName("TBODY")[0];


function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {

  let tBodyElement = document.getElementsByTagName("TBODY")[0];
  tBodyElement.innerHTML = "";

}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  for (let index = 0; index < cart.items.length; index++) {
    let trElement = document.createElement("tr");
    tBodyElement.appendChild(trElement);
    let a = document.createElement("td");
    let quantity = document.createElement("td");
    let items = document.createElement("td");
    a.innerHTML = "X";
    a.classList.add("remover");
    quantity.textContent = cart.items[index].quantity;
    items.textContent = cart.items[index].product;
    trElement.appendChild(a);
    trElement.appendChild(quantity);
    trElement.appendChild(items);
  }

  // TODO: Find the table body

  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR
}

function removeItemFromCart(event) {
<<<<<<< HEAD
  if (event.target.classList.contains("remover")) {
    cart.removeItem(cart);
    cart.saveToLocalStorage();
    renderCart();
=======
  event.preventDefault();
  for (let index = 0; index < cart.items.length; index++) {

    if (cart.items[index].product === event.target.id) {
      cart.removeItem(index);
    }
>>>>>>> bce79f166a6ec7d9e2c8cabc73c712e59586b5d3
  }

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table
}

// This will initialize the page and draw the cart on screen
renderCart();
