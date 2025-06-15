// ✅ Add to cart using localStorage for cross-page persistence
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        let count = localStorage.getItem('cartCount');
        count = count ? parseInt(count) + 1 : 1;
        localStorage.setItem('cartCount', count);
        updateCartCount();
        alert('Item added to cart!');
    });
});

// ✅ Chat box toggle
const chatIcon = document.querySelector('.chat-icon');
const closeChat = document.querySelector('.close-chat');
if (chatIcon && closeChat) {
    chatIcon.addEventListener('click', () => {
        document.querySelector('.chat-box').style.display = 'block';
    });

    closeChat.addEventListener('click', () => {
        document.querySelector('.chat-box').style.display = 'none';
    });
}

// ✅ Send message button
document.querySelectorAll('.send-message').forEach(button => {
    button.addEventListener('click', () => {
        alert('Message sent successfully!');
    });
});

// ✅ Back to Home functionality
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.back-home').forEach(button => {
        button.addEventListener('click', () => {
            window.location.href = 'mainpage.html';
        });
    });

    // ✅ Update cart count on page load
    updateCartCount();
});

// ✅ Update cart count badge
function updateCartCount() {
    const count = localStorage.getItem('cartCount') || 0;
    const cartElement = document.getElementById('cart-count') || document.querySelector('.cart-count');
    if (cartElement) {
        cartElement.textContent = count;
    }
}

//cart view
const cartButton = document.getElementById("cart-button");
const miniCart = document.getElementById("mini-cart");
const cartItemsContainer = document.getElementById("cart-items");

// Sample cart items from your fashion store
let cart = [
  {
    name: "Elegant Gown",
    price: "₹1699",
    img: "https://i.pinimg.com/736x/99/dc/61/99dc61b035b5596ee7af93c6c8465616.jpg" alt="Girl 1" // replace with your actual image path
  },
  {
    name: "Desi Lehenga",
    price: "₹2499",
    img: "https://medias.utsavfashion.com/media/catalog/product/cache/1/image/1000x/040ec09b1e35df139433887a97daa66f/e/m/embroidered-net-lehenga-in-sky-blue-v1-luf3378.jpg" alt="Girl 3"
  },
  {
    name: "Casual Fusion",
    price: "₹1299",
    img: "https://i.pinimg.com/736x/27/b9/0f/27b90f8f9656bd2ef766c41359566c5d.jpg" alt="Girl 6"
  }
];

// Toggle Mini Cart
cartButton.addEventListener("click", () => {
  miniCart.classList.toggle("hidden");
  displayCartItems();
});

// Display Cart Items in Mini Cart
function displayCartItems() {
  cartItemsContainer.innerHTML = "";
  cart.forEach(item => {
    const div = document.createElement("div");
    div.classList.add("cart-item");
    div.innerHTML = `
      <img src="${item.img}" alt="${item.name}" />
      <div>
        <p>${item.name}</p>
        <p><strong>${item.price}</strong></p>
      </div>
    `;
    cartItemsContainer.appendChild(div);
  });
}




