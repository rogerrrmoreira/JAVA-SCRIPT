const lista = document.getElementById("lista");
const btnMostrarTodos = document.getElementById("mostrarTodos");
const btnDarDesconto = document.getElementById("darDesconto");
const btnSomarTudo = document.getElementById("somarTudo");
const btnMostrarVeganos = document.getElementById("mostrarVeganos");

const DISCOUNT_PERCENTAGE = 0.1;

const formatPrice = (price) => `R$ ${price.toFixed(2).replace(".", ",")}`;

const createMenuItemHTML = ({ name, price, vegan, src }) => `
  <li>
    <h3>${name}</h3>
    <img src="${src}" alt="${name}">
    <p class="item-price">${formatPrice(price)}</p>
    <p>${vegan ? "🌱 Vegano" : "🍔 Tradicional"}</p>
    <hr>
  </li>
`;

const renderItems = (items) => {
  lista.innerHTML = items.map(createMenuItemHTML).join("");
};

const renderTotal = (total) => {
  lista.innerHTML = `
    <li>
      <h3>Total</h3>
      <p class="item-price">${formatPrice(total)}</p>
      <hr>
    </li>
  `;
};

btnMostrarTodos.addEventListener("click", () => {
  renderItems(menuOptions);
});

btnDarDesconto.addEventListener("click", () => {
  const discountedItems = menuOptions.map((item) => ({
    ...item,
    price: item.price * (1 - DISCOUNT_PERCENTAGE),
  }));

  renderItems(discountedItems);
});

btnSomarTudo.addEventListener("click", () => {
  const total = menuOptions.reduce((acc, item) => acc + item.price, 0);
  renderTotal(total);
});

btnMostrarVeganos.addEventListener("click", () => {
  const veganOptions = menuOptions.filter((item) => item.vegan);
  renderItems(veganOptions);
});