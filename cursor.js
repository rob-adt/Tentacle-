document.addEventListener("mousemove", (e) => {
    const image = document.getElementById("octodad");

    image.style.left = e.clientX + "px";
    image.style.top = e.clientY + "px";

    image.style.width = (window.innerWidth - e.clientX) + "px";

})