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

