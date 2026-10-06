# Tentacle-
A website with a tentacle that follows your mouse.


This is the java script for the tentacle following the mouse


document.addEventListener("mousemove", (e) => { 
This line tells the webpage to run the code inside the { } whenever the mouse moves. The (e) stores information about the mouse movement such as the mouses position on the screen.

    const image = document.getElementById("octodad");
this line finds the HTML element with the ID octodad and saves it as an image.

    image.style.left = e.clientX + "px";
this line moves the image left and right based on where the mouse is. e.clientX is the mouses horizontal position.
    
    image.style.top = e.clientY + "px";
this line moves the image up and down based on where the mouse is. e.clientY is the mouses vertical position.

    image.style.width = (window.innerWidth - e.clientX) + "px";
this line changes the width of the image based on where the mouse is. e.clientX is the mouses horizontal position and window.innerWidth is the width of the browser window so (window.innerWidth - e.clientX) is the amount of space between the mouse and the right side of the screen.

})
