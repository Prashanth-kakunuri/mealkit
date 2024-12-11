// Function to handle the "Explore Categories" button click
function showCategories() {
    alert("Redirecting to meal categories...");
    // Add functionality to redirect to categories page or section if needed
    // For example: window.location.href = 'categories.html';
}

// Function to handle adding a meal kit to the cart
function addToCart(mealName) {
    alert(`${mealName} has been added to your cart!`);
    // Logic to actually add the meal to the cart can be added here
    // For example: addMealToCart(mealName);
}

// Function to view a specific category of meal kits
function viewCategory(category) {
    alert(`You selected the ${category} category!`);
    // Logic to filter or display meal kits based on selected category
    // For example: showCategoryMeals(category);
}

function addToCart(title, image, price) {
    // Get cart from localStorage or initialize it as an empty array
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the item already exists in the cart
    const existingItem = cart.find(item => item.title === title);

    if (existingItem) {
        // If the item is already in the cart, increase its quantity
        existingItem.quantity += 1;
    } else {
        // If the item is not in the cart, add it with quantity 1
        cart.push({ title, image, price, quantity: 1 });
    }

    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Optionally, you can display a message or update the cart summary
    alert(`${title} has been added to the cart!`);
}





//--------------------------------------------------------------------------------
//cateries page
// Function to handle category clicks
function categoryClick(categoryName) {
    alert("You clicked on the " + categoryName + " category!");
    // Here you can redirect to specific category pages or load more content dynamically
    // For example, redirecting to a category page:
    // window.location.href = categoryName.toLowerCase() + '.html';
}
