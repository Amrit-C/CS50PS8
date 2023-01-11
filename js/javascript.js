const images = document.querySelectorAll("img");

images.forEach( img=> img.addEventListener('click', (e) => {
    alert("Amrit Clair is the GOAT. ");
}, { once: true })
);