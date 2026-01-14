document.addEventListener("DOMContentLoaded", () => {

  let cart = [];

  const buttons = document.querySelectorAll(".add-to-cart");
  const cartItemsContainer = document.querySelector(".cart-items");
  const cartTitle = document.querySelector(".cart h2");
  const totalElement = document.querySelector(".cart-total p:last-child");

  buttons.forEach(button => {
    button.addEventListener("click", () => {

      const card = button.closest(".card");

      const name = card.querySelector(".item-name").textContent;
      const price = Number(card.querySelector(".item-price").dataset.price);

      const item = { name, price };
      cart.push(item);

      updateCartUI();
      updateTotal();
    });
  });

  function updateCartUI() {
    cartItemsContainer.innerHTML = "";

    cart.forEach(item => {
      const div = document.createElement("div");
      div.classList.add("cart-item");

      div.innerHTML = `
        <span>${item.name}</span>
        <span>$${item.price.toFixed(2)}</span>
      `;

      cartItemsContainer.appendChild(div);
    });

    cartTitle.textContent = `Your Cart (${cart.length})`;
  }

  function updateTotal() {
    let total = 0;

    cart.forEach(item => {
      total += item.price;
    });

    totalElement.textContent = `$${total.toFixed(2)}`;
  }
  const confirmBtn = document.querySelector(".confirm-btn");

confirmBtn.addEventListener("click", () => {
  console.log("Confirm button clicked");

  if (cart.length === 0) {
    alert("Your cart is empty!");
  } else {
    alert("Order confirmed! 🎉");
    cart = [];
    updateCartUI();
    updateTotal();
  }
});


});
