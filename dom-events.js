// We use the getElementById method to grab items from the document

const button = document.getElementById('button');


// We then define our event handler function

function eventHandlerFunction(event){

// The event target references the object that we dispatch our event onto.
    event.target.innerHTML = 'Added to cart!';
    console.log(event.timeStamp);
}

// We add an EventListener method with two parameters:
// 1. The event name in a string format (e.g. 'click').
// 2. The event handler function that we want executed once the event fires (e.g. eventHandlerFunction)

button.addEventListener('click', eventHandlerFunction);



// Don't touch anything above here._________________________________________________________________


// Create a function called colorChangeEvent that uses the event's target property to change the styling of the second button when it is clicked. Give it a border-radius. Color the background blue. Make the text white. The second button can be found in index.html. It has an id of "secondButton".
const secondButton = document.getElementById('secondButton');

function colorChangeEvent(event) {
    event.target.style.backgroundColor = '#957dad';
}


// After creating your colorChangeEvent function, add an event listener to your target element, which will be the "color-changer" button.

secondButton.addEventListener('click', colorChangeEvent);