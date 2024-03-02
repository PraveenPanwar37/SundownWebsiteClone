const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

let elemContainer = document.querySelector(".elem-container")
let fixedImage = document.querySelector("#fixed-image")

elemContainer.addEventListener("mouseenter", function(){
    fixedImage.style.display = "block"
})

elemContainer.addEventListener("mouseleave", function(){
    fixedImage.style.display = "none"
})

let elems = document.querySelectorAll(".elem")

elems.forEach(function(e){
    e.addEventListener("mouseenter", function(){
        let image = e.getAttribute("data-image")
        fixedImage.style.backgroundImage = `url(${image})`
    })
})