document.addEventListener("DOMContentLoaded", () => {
    const filterFavorites = document.getElementById('filter-favorites');
    const cartMessage = document.getElementById('cart-message');
    const headerCartIcon = document.querySelector('.fa-shopping-cart');
    const noItemsFound = document.getElementById('no-items-found');
    let showFavorites = false;


    const wishlistIcons = document.querySelectorAll('.wishlist-icon');
    wishlistIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            icon.classList.toggle('active');
        });
    });


    filterFavorites.addEventListener('click', () => {
        showFavorites = !showFavorites;
        let anyFavoriteVisible = false;

        wishlistIcons.forEach(icon => {
            const product = icon.closest('.product');
            if (showFavorites) {
                if (icon.classList.contains('active')) {
                    product.style.display = 'block';
                    anyFavoriteVisible = true;
                } else {
                    product.style.display = 'none';
                }
            } else {
                product.style.display = 'block';
            }
        });

        if (showFavorites && !anyFavoriteVisible) {
            noItemsFound.style.display = 'block';
        } else {
            noItemsFound.style.display = 'none';
        }
    });

    const addToCartIcons = document.querySelectorAll('.container .fa-shopping-cart');
    addToCartIcons.forEach(icon => {
        icon.addEventListener('click', () => {

            cartMessage.style.display = 'block';
            headerCartIcon.classList.add('fa-shake');

            setTimeout(() => {
                cartMessage.style.display = 'none';
            }, 2000);
            setTimeout(() => {
                headerCartIcon.classList.remove('fa-shake');
            }, 5000);
        });
    });


    const notFound = document.getElementById('not-found');
    const searchInput = document.querySelector('.search-bar input');
    const searchIcon = document.querySelector('.fa-search');

    searchIcon.addEventListener('click', () => {
        const query = searchInput.value.trim().toLowerCase();
        const products = document.querySelectorAll('.product');
        let anyProductVisible = false;

        products.forEach(product => {
            const title = product.querySelector('h3').textContent.toLowerCase();
            if (title.includes(query)) {
                product.style.display = 'block';
                anyProductVisible = true;
            } else {
                product.style.display = 'none';
            }
        });

        if (!anyProductVisible) {
            notFound.style.display = 'block';
        } else {
            notFound.style.display = 'none';
        }
    });

    searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            searchIcon.click();
        }
    });
});