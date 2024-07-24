let totalPrice = 0;

function addToCart(price) {
    totalPrice += price;
    document.getElementById('total-price').innerText = totalPrice;
}
