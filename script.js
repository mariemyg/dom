document.addEventListener("DOMContentLoaded", function () {
    const cartItems = document.querySelectorAll(".cart-item");
    const totalElement = document.getElementById("total-price");
  
    cartItems.forEach((item) => {
      const minusBtn = item.querySelector(".minus-btn");
      const plusBtn = item.querySelector(".plus-btn");
      const quantityElement = item.querySelector(".item-quantity");
      const deleteBtn = item.querySelector(".delete-btn");
      const likeBtn = item.querySelector(".like-btn");
      const itemPrice = parseInt(item.getAttribute("data-price"));
  
      minusBtn.addEventListener("click", () => {
        let quantity = parseInt(quantityElement.textContent);
        if (quantity > 1) {
          quantity--;
          quantityElement.textContent = quantity;
          updateTotal();
        }
      });
  
      plusBtn.addEventListener("click", () => {
        let quantity = parseInt(quantityElement.textContent);
        quantity++;
        quantityElement.textContent = quantity;
        updateTotal();
      });
  
      deleteBtn.addEventListener("click", () => {
        item.remove();
        updateTotal();
      });
  
      likeBtn.addEventListener("click", () => {
        likeBtn.classList.toggle("liked");
      });
  
      function updateTotal() {
        let total = 0;
        cartItems.forEach((cartItem) => {
          const quantity = parseInt(cartItem.querySelector(".item-quantity").textContent);
          const price = parseInt(cartItem.getAttribute("data-price"));
          total += quantity * price;
        });
        totalElement.textContent = `Total: $${total}`;
      }
    });
  });
  