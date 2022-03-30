// We use the getElementById method to grab items from the document

const button = document.getElementById('button');

// We then define our event handler function

function eventHandlerFunction(event){

// The event target references the object that we dispatch our event onto.
    event.target.innerHTML = 'Added to cart!';
    console.log(event.timeStamp);
}

// We add an EventListener method with two parameters:
// 1. The event name in a string format
// 2. The event handler function that we want executed once the event fires.

button.addEventListener('click', eventHandlerFunction);



// Don't touch anything above here._________________________________________________________________


// Create a function called colorChangeEvent that uses the "event.target" property to do something interesting to the second button when it is clicked. For example, change something stylistically about the button, such as its color, background color, or border radius. Have some fun with it. The button's id is "color-changer".



// After creating your colorChangeEvent function, add it to your target element, which will be the "color-changer" button.

