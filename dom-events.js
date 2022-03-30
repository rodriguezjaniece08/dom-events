// We use the getElementById method to grab items from the document

const button = document.getElementById('button');

// We then define our event handler function

function eventHandlerFunction(event){

// The event target references the object that we dispatch our event onto.
    event.target.innerHTML = 'Added to cart!';
}

// We add an EventListener method with two parameters:
// 1. The event name in a string format
// 2. The event handler function that we want executed once the event fires.

button.addEventListener('click', eventHandlerFunction);

// Create a function called colorChangeEvent that uses the "event.target" property to do something interesting to the second button when it is clicked. The button's id is "color-changer".



// After creating your colorChangeEvent, you will need to use  event listeners to add your event handler to. 