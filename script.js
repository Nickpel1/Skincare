
const products=[
    {
        id: 1,
        name: "Dr Teals Body Lotion",
        price: 15000,
        image:"images/teal.jpg",
    },
    {
        id: 2,
        name: "Vitamin C Serum",
        price: 10000,
        image:"images/rash.webp",
    },
    {
        id: 3,
        name: "Beauty face Moisturizer",
        price: 7500,
        image: "images/beaut.jpg",
    },
    {
        id: 4,
        name: "Dr Rashel Sunscreen",
        price: 10500,
        image: "images/cent.jpeg",
    }
];
let cart =[];
function renderProducts(){
    const productList = document.getElementById("product-list");
    productList.innerHTML= "";
    products.forEach(product =>{
        productList.innerHTML +=`
        <div class="product">
        <img src ="${product.image}" alt="${product.name}"/>
    <h3>${product.name}</h3>
    <p>#${product.price.toFixed(2)}</p>
    <button onclick= "addToCart(${product.id})">Add to Cart</button>
    </div>
    `;
 });
}

function addToCart(productId){
    const item = products.find(p=>p.id===
        productId);
        cart.push(item);
        updateCart();
}
function updateCart(){
document.getElementById("cart-count").innerText=cart.length;
const cartItems=document.getElementById("cart-items");
const cartTotal=document.getElementById("cart-total");
cartItems.innerHTML="";
let total= 0;
cart.forEach((item,index)=>{
   total+=item.price; 
  cartItems.innerHTML+= `<li>${item.name} - #${item.price.toFixed(2)}
   <button onclick="removeFromCart(${index})">x</button></li>`;
});
cartTotal.innerText=total.toFixed(2);
}
function removeFromCart(index){
cart.splice(index, 1);
updateCart();
}
function toggleCart(){
    const cartBox= document.getElementById("cart");
    cartBox.style.display=cartBox.style.display==="block" ? "none":
    "block";
}
function checkOut(){
    alert("Checkout is not implemented in this demo.");
}
renderProducts();