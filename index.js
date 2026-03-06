// Global variable that stores an array of burgers
// This array initially contains two burger options
const burgers = ["Hamburger", "Cheeseburger"];

// Global variable that stores the currently featured drink
let featuredDrink = "Strawberry Milkshake";


// Function named addBurger
// When called, it creates a new burger and adds it to the burgers array
function addBurger() {

    // Function-scoped variable that stores the name of a new burger
    const newBurger = "Flatburger";

    // Adds the new burger to the burgers array using the push() method
    burgers.push(newBurger);
}


// if statement with a condition that is always true
// This guarantees the code inside the block will always run
// ** Test is specifically looking for "if(true)" formatting specific (i.e. no space bewteen 'if' and "()")
if(true) {

    // Block-scoped variable (exists only inside this if block)
    // This variable stores another burger option
    const anotherNewBurger = "Maple Bacon Burger";

    // Adds the new burger to the burgers array
    burgers.push(anotherNewBurger);

    // Function that sets the value of the featuredDrink variable
    function changeFeaturedDrink(newFeaturedDrink = "The JavaShake") {

        // Updates the global featuredDrink variable
        featuredDrink = newFeaturedDrink;
    }
}