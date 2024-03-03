# Shopping Cart - DRIP X FILA FOOTWEAR

This is a simple shopping cart application that allows users to add and remove items, update quantities, and calculate the total cost.

## Project Links
- Project Link: [dripxfila-shoppingcart.netlify.app](https://dripxfila-shoppingcart.netlify.app/)
- Github Repository: [Aeden-Manell/Shopping-Cart---DRIP-X-FILA-FOOTWEAR](https://github.com/Aeden-Manell/Shopping-Cart---DRIP-X-FILA-FOOTWEAR)

## Description

In this project, we created a shopping cart application using HTML, CSS, and JavaScript. The application allows users to add and remove items, update quantities, and calculate the total cost.

### HTML Structure

We started by creating an HTML file (index.html) and set up the basic HTML structure with the necessary elements for the shopping cart. We added a heading to display the name of the product being sold. Additionally, we included an input field for users to enter the desired quantity of the product and a button to add the selected quantity to the shopping cart. The button has an "onclick" attribute that calls a JavaScript function.

We also created a div element to display the shopping cart's contents and total cost.

### Styling with CSS and Bootstrap

To style the page, we created a CSS file (styles.css) and linked it to the HTML file. We added Bootstrap to the project by linking to the Bootstrap CSS and JavaScript files. We used CSS and Bootstrap components, such as containers, rows, and columns, to style the page. We adjusted the colors, fonts, and layout to create a visually appealing design.

### JavaScript Functionality

We created a JavaScript file (scripts.js) and linked it to the HTML file. In the JavaScript file, we wrote functions to handle adding and removing items from the shopping cart, as well as updating the displayed shopping cart contents and total cost in the HTML.

The function for adding items to the shopping cart retrieves the entered quantity from the input field, updates the shopping cart's contents with the new quantity, and calculates the total cost based on the quantity and the product's price.

The function for removing items from the shopping cart clears the shopping cart's contents and resets the total cost to zero.

We also wrote a function to update the displayed shopping cart contents and total cost in the HTML.

By implementing these functionalities, users can easily manage their shopping cart, update quantities, and see the total cost of their purchases.



### Project Setup

1. **HTML Structure:** An HTML file (index.html) was created to define the basic structure of the shopping cart. This included elements for displaying the product name, quantity input field, "Add to Cart" button, and a section to show the cart contents and total cost.
2. **CSS Styling:** A CSS file (styles.css) was created to style the application. Bootstrap was integrated by linking to its CSS and JavaScript files. The page was styled using Bootstrap components and custom CSS to create a visually appealing design.
3. **JavaScript Functionality:** A JavaScript file (scripts.js) was created to handle the application's logic. The following functions were implemented:
    - **Add to Cart:** This function retrieves the entered quantity, updates the shopping cart with the new quantity, and calculates the total cost.
    - **Remove from Cart:** This function clears the shopping cart contents and resets the total cost to zero.
    - **Update Cart Display:** This function updates the displayed shopping cart contents and total cost in the HTML based on the current cart state.

### Getting Started

1. Clone the repository: `git clone https://github.com/Aeden-Manell/Shopping-Cart---DRIP-X-FILA-FOOTWEAR.git`
2. Install dependencies (if any): `npm install`
3. Open the project in your code editor.
4. Run the application:
    - For development: `npm start` (starts the development server)
    - For production: Build the project using `npm run build` and serve the generated files from a web server.

### Additional Notes

* This project is a basic example of a shopping cart application.
* You can customize the application further by adding features such as product images, product descriptions, user authentication, and payment processing.
