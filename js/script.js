let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

function eventListeners(){
    cartList.addEventListener('add to cart').onclick = ()=>{
    }
    function addToCartList(product){
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.setAttribute('data-id', `${product.id}`);
        cartItem.innerHTML = `
            <img src = "${product.imgSrc}" alt = "product image">
            <div class = "box">
                <h3 >${product.name}</h3>
                
            </div>
            
        `;
        btn.appendChild(cartItem);
    }
}