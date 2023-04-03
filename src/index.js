/** Variables Globales **/
const products = [];
/** Elementos **/
const mainFormElement = document.getElementById("main-form");
const productsListElement = document.getElementById("products-list");
const totalQuantityElement = document.getElementById("total-quantity");
const totalPriceElement = document.getElementById("total-price");
/** Funciones principales **/

/** Event Listeners **/
mainFormElement.addEventListener("submit", (event) => {
  // prevenir que la pagina refresque
  event.preventDefault();
  // obtener la informacion de los campos
  const name = document.getElementById("name").value;
  const price = parseInt(document.getElementById("price").value, 10);
  const quantity = parseInt(document.getElementById("quantity").value, 10);

  // guardar el producto
  const product = {
    name: name,
    price: price,
    quantity: quantity
  };

  // guardar informacion del producto */
  products.push(product);
  // vaciar formulario */
  mainFormElement.reset();
  // agregar producto al listado */
  const listElement = document.createElement("li");
  listElement.textContent = `${name}: precio: ${price} cantidad: ${quantity}`;

  productsListElement.append(listElement);

  // calcular costos y total de productos */
  let totalQuantity = 0;
  let totalPrice = 0;

  products.forEach((prod) => {
    //sumar cantidad al total
    totalQuantity += prod.quantity;
    //calcular total del producto
    totalPrice += prod.price * prod.quantity;
    //sumar precio al total
  });
  totalQuantityElement.textContent = totalQuantity;
  totalPriceElement.textContent = totalPrice;
});
