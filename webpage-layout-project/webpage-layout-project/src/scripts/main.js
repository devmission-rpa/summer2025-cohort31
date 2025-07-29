// This file contains the JavaScript code for the webpage. 
// It may include functionality such as event listeners, DOM manipulation, 
// and any interactive features of the webpage.

document.addEventListener('DOMContentLoaded', () => {
    console.log('Webpage layout loaded successfully.');

    // Example of adding an event listener to a button
    const button = document.getElementById('myButton');
    if (button) {
        button.addEventListener('click', () => {
            alert('Button clicked!');
        });
    }
});