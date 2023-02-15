const menuItems = document.querySelector("#menu-items");
let image = document.querySelector("#dish-image");
let dishName = document.querySelector("#dish-name");
let dishDescription = document.querySelector("#dish-description");
let dishPrice = document.querySelector("#dish-price");
let cartForm = document.querySelector("#cart-form");
let curCartAmount = document.querySelector("#number-in-cart");

fetch("http://localhost:3000/menu")
  .then((res) => res.json())
  .then((menuItems) => {
    menuItems.forEach((menuItem) => {
      console.log(menuItem);
      addMenuItems(menuItem);
    });
    renderMenuItem(menuItems[0]);
  });

function addMenuItems(menuItem) {
  let span = document.createElement("span"); //where
  span.textContent = menuItem.name; //what
  menuItems.append(span); //append
  span.addEventListener("click", () => {
    //GO OVER WHY ITS SPAN NOT MENUITEMS
    renderMenuItem(menuItem);
  });
}

function renderMenuItem(menuItem) {
  curCartAmount.textContent = 0; //only if need to set to 0
  image.src = menuItem.image;
  dishName.textContent = menuItem.name;
  dishDescription.textContent = menuItem.description;
  dishPrice.textContent = "$" + menuItem.price;
}

cartForm.addEventListener("submit", (e) => {
  e.preventDefault();
  //add a name attribute to the input and call it cart_amount so then we can use that for the target)
  const numberOfItems = e.target.cart_amount.value;
  console.log(typeof numberOfItems);
  const numberOfItemsInCart = curCartAmount.textContent;
  console.log(typeof numberOfItemsInCart);
  const totalItems = parseInt(numberOfItemsInCart) + parseInt(numberOfItems); //do parse int to make them into a number instead of a string
  curCartAmount.textContent = totalItems;
});

//when press add to cart button
//currently in + new number
