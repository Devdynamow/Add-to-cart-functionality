var products = [
    {name: "White Chair", headline: "", price: 15000, image: "https://images.unsplash.com/photo-1547587091-f883cf8f0c12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2hpdGUlMjBjaGFpcnxlbnwwfHwwfHx8MA%3D%3D" },
    {name: "blue Chair", headline: "", price: 14000, image: "https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJsdWUlMjBjaGFpcnxlbnwwfHwwfHx8MA%3D%3D" },
    {name: "wooden Chair", headline: "", price: 18000, image: "https://images.unsplash.com/photo-1503602642458-232111445657?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNoYWlyfGVufDB8fDB8fHww" },
    {name: "new Chair", headline: "", price: 20000, image: "https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNoYWlyfGVufDB8fDB8fHww" }
];

var popular = [
    {name: "red Chair", headline: "", price: 15000, image: "https://images.unsplash.com/photo-1609869441173-5b2857fd7cc5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    {name: "gray Chair", headline: "", price: 18000, image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    {name: "yellow Chair", headline: "", price: 14000, image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1916&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    {name: "green Chair", headline: "", price: 10000, image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=1992&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
];

var cart = [];

function addProduct() {
    var clutter = "";

    products.forEach(function (product, index) {
        clutter += ` <div class="product w-fit rounded-xl p-2 bg-white">
            <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden">
                <img class="w-full h-full object-cover" src="${product.image}"/>
            </div>
            <div  class="data w-full px-2 py-5">
                <h1 class="font-semibold text-xl leading-none tracking-tight">${product.name}</h1>
                <div class="flex justify-between w-full items-center mt-2">
                    <div class="w-1/2">
                        <h3 class="font-semibold opacity-20">${product.headline}</h3>
                        <h4 class="font-semibold mt-2"> &#8377; ${product.price}</h4>
                    </div>
                    <button data-index="${index}" class="add w-10 h-10 rounded-full shader text-yellow-400"><i data-index="${index}" class="add ri-add-line"></i></button>
                </div>
            </div>
        </div>`;
    });

    document.querySelector(".products").innerHTML = clutter;
}

addProduct();

function addPopularchairs() {
    var clutter = "";
    popular.forEach(function (product) {
        clutter += `  <div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
            <div class="w-20 h-20  flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
                <img class="w-full h-full object-cover" src="${product.image}" alt="">
            </div>
            <div class="data py-2 w-full">
                <h1 class="leading-none font-semibold">${product.name}</h1>
                <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${product.headline}</h4>
                <h4 class="mt-3 font-semibold text-zinc-500">&#8377; ${product.price}</h4>
            </div>
        </div>`;
    });

    document.querySelector(".populars").innerHTML = clutter;
}

addPopularchairs();

function addToCart() {
    document.querySelector(".products").addEventListener("click", function (event) {
        if (event.target.classList.contains('add')) {
            const index = event.target.dataset.index;
            const product = products[index];
            const existingCartItem = cart.find(item => item.name === product.name);
            if (existingCartItem) {
                existingCartItem.quantity++;
            } else {
                product.quantity = 1;
                cart.push(product);
            }
            updateCart();
        }
    });
}

addToCart();

function updateCart() {
    var clutter = "";
    cart.forEach(function (prod) {
        var totalPrice = prod.price * prod.quantity;
        if (prod.quantity > 0) {
            clutter += `
                <div class="flex gap-2 bg-white p-2 rounded-lg">
                    <div class="w-10 h-10 flex-shrink-0 rounded-lg overflow-hidden">
                        <img class="w-full h-full object-cover" src="${prod.image}" alt="">
                    </div>
                    <div>
                        <h3 class="font-semibold">${prod.name}</h3>
                        <h5 class="text-sm font-semibold opacity-20-80">&#8377; ${totalPrice}</h5>
                        <div class="quantity">
                            <button class="decrease-quantity" data-product="${prod.name}">-</button>
                            <span>${prod.quantity}</span>
                            <button class="increase-quantity" data-product="${prod.name}">+</button>
                        </div>
                        <button class="remove-from-cart" data-product="${prod.name}">&#10006;</button>
                    </div>
                </div>`;
        }
    });

    document.querySelector(".cartexpnd").innerHTML = clutter;
}

function showCart() {
    document.querySelector(".carticon").addEventListener("click", function () {
        document.querySelector(".cartexpnd").style.display = "block";
        updateCart();
    });

    document.querySelector(".main").addEventListener("blur", function () {
        document.querySelector(".cartexpnd").style.display = "none";
    });

    document.querySelector(".cartexpnd").addEventListener("click", function (event) {
        if (event.target.classList.contains("increase-quantity")) {
            const productName = event.target.dataset.product;
            const product = cart.find(item => item.name === productName);
            product.quantity++;
            updateCart();
        } else if (event.target.classList.contains("decrease-quantity")) {
            const productName = event.target.dataset.product;
            const product = cart.find(item => item.name === productName);
            if (product.quantity > 1) {
                product.quantity--;
            }
            updateCart();
        } else if (event.target.classList.contains("remove-from-cart")) {
            const productName = event.target.dataset.product;
            const index = cart.findIndex(item => item.name === productName);
            cart.splice(index, 1);
            updateCart();
        }
    });
}

showCart();
