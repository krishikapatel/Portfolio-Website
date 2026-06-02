const words=["Fullstack Developer","Web Developer","UI/UX Designer"]

let i=0 
let j=0
let current=""
let isDeleting=false

function type(){ // Main function to handle the typing effect

current=words[i]// Get the current word from the array based on index i

if(isDeleting){ // If we are in the deleting phase, remove one character from the current word
j-- // Decrease the index j to remove characters from the end of the current word
}else{ // If we are in the typing phase, add one character to the current word
j++ // Increase the index j to add characters from the current word
}

document.querySelector(".typing").textContent=current.substring(0,j) // Update the text content of the element with class "typing" to show the current substring of the word based on index j

if(!isDeleting && j===current.length){ // If we have finished typing the current word, start the deleting phase after a short delay
isDeleting=true // Set the isDeleting flag to true to start deleting characters
setTimeout(type,1000) // Wait for 1 second before starting to delete the word
return // Return early to prevent the function from immediately starting to delete the word without showing it for a moment
}

if(isDeleting && j===0){ // If we have finished deleting the current word, move to the next word and start typing it
isDeleting=false // Set the isDeleting flag to false to start typing the next word
i++ // Move to the next word in the array
if(i===words.length){   // If we have reached the end of the words array, reset to the first word
i=0 // Reset index i to 0 to loop back to the first word in the array
}
}

setTimeout(type,120)/* Adjust typing speed by changing the timeout duration (e.g., 120ms for normal speed, 80ms for faster typing)  */

}

type() // Start the typing effect when the page loads by calling the type function for the first time