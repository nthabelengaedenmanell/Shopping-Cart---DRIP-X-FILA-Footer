// Function to remove an item from the cart
function removeItem(event) {
  /* Get the button that was clicked*/
  let buttonClicked = event.target;

  buttonClicked.parentElement.parentElement.remove();

  ShoppingCartMainProgram();
}

// Attach remove item functionality to "remove-btn" buttons
let removeCartItemButtons = document.getElementsByClassName("remove-btn");
for (let i = 0; i < removeCartItemButtons.length; i++) {
  let button = removeCartItemButtons[i];
  button.addEventListener("click", removeItem);
}

// Function to handle quantity changes
function quantityChanged(event) {
  // Get the input field that was changed
  let input = event.target;
  // Ensure a valid quantity
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }

  ShoppingCartMainProgram();
}

// Attach quantity change functionality to "quantityValue" inputs
let quantityInputs = document.getElementsByClassName("quantityValue");
for (let i = 0; i < quantityInputs.length; i++) {
  let input = quantityInputs[i];
  input.addEventListener("change", quantityChanged);
}

// Function to add an item to the cart
function addToCart() {
  let button = event.target;
  let shopItem = button.parentElement.parentElement;
  // Extract item details
  let title = shopItem.getElementsByClassName("shoeTitle")[0].innerText;
  let price = 2200; // Fixed price
  let imageSrc = shopItem.getElementsByClassName("shoe-image")[0].src;
  // Add the item to the cart
  addItem(title, price, imageSrc);

  ShoppingCartMainProgram();
}

// Attach add to cart functionality to "addtocart-btn" buttons
let addToCartButtons = document.getElementsByClassName("addtocart-btn");
for (let i = 0; i < addToCartButtons.length; i++) {
  let button = addToCartButtons[i];
  button.addEventListener("click", addToCart);
}

/*
Function to add an item to the shopping cart.
 */
function addItem(title, price, imageSrc) {
  // Create a new div element for the cart row
  let cartRow = document.createElement("div");
  cartRow.classList.add("row"); // Add the "row" class for styling

  // Get a reference to the container for cart items
  let cartItems = document.getElementsByClassName("shoppingcartItems")[0];

  // Check for duplicate items in the cart
  let cartItemNames = cartItems.getElementsByClassName("shoeName");
  for (let i = 0; i < cartItemNames.length; i++) {
    if (cartItemNames[i].innerText === title) {
      return alert("Item added to cart");
    }
  }

  // Create the HTML content for the cart row
  let cartRowContents = `
      <div class="cart-item column">
        <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
        <span class="shoeName">${title}</span>
      </div>
      <span class="cart-price column">R ${price}</span>
      <div class="cart-quantity column">
        <input class="quantityValue" type="number" value="1">
        <button class="btn remove-btn" type="button">Remove</button>
      </div>
    `;

  // Set the HTML content of the cart row
  cartRow.innerHTML = cartRowContents;

  // Append the cart row to the cart items container
  cartItems.append(cartRow);

  // Add event listeners for the remove button and quantity input
  cartRow
    .getElementsByClassName("remove-btn")[0]
    .addEventListener("click", removeItem);
  cartRow
    .getElementsByClassName("quantityValue")[0]
    .addEventListener("change", quantityChanged);
}

function ShoppingCartMainProgram() {
  // Get the main container for shopping cart items:
  let cartItemContainer = document.getElementsByClassName("shoppingcartItems")[0];

  // Get all rows within the cart item container:
  let cartRows = cartItemContainer.getElementsByClassName("row");

  // Initialize a variable to store the total price:
  let total = 0;

  // Iterate through each cart row:
  for (let i = 0; i < cartRows.length; i++) {
    let cartRow = cartRows[i];

    // Get the price and quantity elements from the current row:
    let priceElement = cartRow.getElementsByClassName("cart-price")[0];
    let quantityElement = cartRow.getElementsByClassName("quantityValue")[0];

    // Extract the price value, removing the "R" symbol and parsing as a float:
    let price = parseFloat(priceElement.innerText.replace("R", ""));

    // Get the quantity value from the input element:
    let quantity = quantityElement.value;

    // Calculate the line item total and add it to the overall total:
    total = total + price * quantity;
  }

  // Calculate the 15% VAT and add it to the total:
  let vatTotal = total * 0.15;
  total = total + vatTotal;

  // If the total exceeds 4000, add a delivery fee of 500:
  if (total > 4000) {
    total += 500;

    // Update the delivery price display:
    document.getElementsByClassName("delivery-price")[0].innerText = "R" + 500;
  }

  // Display the VAT amount:
  document.getElementsByClassName("vat-price")[0].innerText = "R" + vatTotal;

  // Display the final cart total price:
  document.getElementsByClassName("cart-total-price")[0].innerText = "R" + total;
}
