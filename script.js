// Shopping cart functionality
let cart = [];

function addToCart(product) {
    cart.push(product);
    updateCartDisplay();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    let total = 0;

    if (cartItems) {
        cartItems.innerHTML = '';
        cart.forEach((item, index) => {
            const itemElement = document.createElement('div');
            itemElement.className = 'cart-item';
            itemElement.innerHTML = `
                <p>${item.name} - ${item.size || 'N/A'} - $${item.price}</p>
                <button onclick="removeFromCart(${index})">Remove</button>
            `;
            cartItems.appendChild(itemElement);
            total += parseFloat(item.price);
        });

        if (cartTotal) {
            cartTotal.textContent = total.toFixed(2);
        }
    }
}

// Add to cart button functionality
document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const product = button.closest('.product');
            const name = product.querySelector('h3').textContent;
            const price = parseFloat(product.querySelector('.price').textContent.replace('$', ''));
            const sizeSelect = product.querySelector('.size-select');
            const size = sizeSelect ? sizeSelect.value : null;

            if (sizeSelect && !size) {
                alert('Please select a size');
                return;
            }

            addToCart({
                name,
                price,
                size
            });
        });
    });

    // Checkout button functionality
    const checkoutButton = document.getElementById('checkout-button');
    if (checkoutButton) {
        checkoutButton.addEventListener('click', function() {
            if (cart.length === 0) {
                alert('Your cart is empty');
                return;
            }
            // Here you would typically redirect to a checkout page
            alert('Proceeding to checkout...');
        });
    }
});

// Mobile navigation
document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                const content = this.querySelector('.dropdown-content');
                dropdowns.forEach(other => {
                    if (other !== this) {
                        other.classList.remove('active');
                    }
                });
                this.classList.toggle('active');
                e.stopPropagation();
            }
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', function() {
        dropdowns.forEach(dropdown => {
            dropdown.classList.remove('active');
        });
    });
});

// Team gallery functionality
function openGalleryImage(imgElement) {
    const modal = document.createElement('div');
    modal.className = 'gallery-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <img src="${imgElement.src}" alt="${imgElement.alt}">
        </div>
    `;
    document.body.appendChild(modal);

    modal.querySelector('.close-modal').onclick = function() {
        modal.remove();
    };

    modal.onclick = function(e) {
        if (e.target === modal) {
            modal.remove();
        }
    };
}

// Initialize gallery functionality if on a team page
document.addEventListener('DOMContentLoaded', function() {
    const galleryImages = document.querySelectorAll('.photo-item img');
    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            openGalleryImage(this);
        });
    });
}); 