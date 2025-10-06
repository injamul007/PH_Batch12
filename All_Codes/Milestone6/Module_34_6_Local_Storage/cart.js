//?

const handleAddProducts = () => {
  const productEl = document.getElementById('product');
  const product = productEl.value;
  const quantityEl = document.getElementById('quantity');
  const quantity = Number(quantityEl.value);

  productEl.value = '';
  quantityEl.value = '';
  displayProduct(product,quantity)
  addProductToCart(product,quantity)
  // const productInfoObj = {product: product, quantity: quantity,};
  // console.log(productInfoObj)

  // const setInLs = localStorage.setItem('productInfo', JSON.stringify(productInfoObj));
  // console.log(setInLs)
  // document.getElementById('showProduct').innerHTML += `<p style="font-size: 20px">${productInfoObj.product}</p>
  // <h3>${productInfoObj.quantity} Pieces</h3>
  // `;
}

const getCart = () => {
  let cart = {};

  const cartJSON = localStorage.getItem('cart');
  if(cartJSON) {
    cart = JSON.parse(cartJSON)
  }

  return cart;
}

const addProductToCart = (product,quantity) => {
  const cart = getCart()

  if(cart[product]) {
    cart[product] += quantity;
  } else {
    cart[product] = quantity;
  }

  console.log('cart', cart);
  const cartJSON = JSON.stringify(cart);
  localStorage.setItem('cart', cartJSON)
}

const displayProduct = (product,quantity) => {
  const li = document.createElement('li')
  li.innerHTML = `${product} : ${quantity}`;
  document.getElementById('products_container').append(li)
}


const displayStoredProducts = () => {
  const cart = getCart();
  for (const product in cart) {
    const quantity = cart[product]
    console.log(product, quantity)
    displayProduct(product,quantity);
  }
  // return cart;
}

displayStoredProducts()