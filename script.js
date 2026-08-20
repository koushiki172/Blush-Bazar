let cart = [];
let total = 0;

function showCategory(categoryId) {
  document.querySelectorAll('.category').forEach(cat => cat.style.display = 'none');
  document.getElementById(categoryId).style.display = 'block';
}

function addToCart(product, price) {
  cart.push({ product, price });
  total += price;
  displayCart();
}

function displayCart() {
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";
  cart.forEach(item => {
    let li = document.createElement("li");
    li.textContent = `${item.product} - $${item.price}`;
    cartItems.appendChild(li);
  });
  document.getElementById("total").textContent = `Total: $${total}`;
}

function buyNow() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
  } else {
    alert(`Thank you for your purchase! Total: $${total}`);
    cart = [];
    total = 0;
    displayCart();
  }
}

