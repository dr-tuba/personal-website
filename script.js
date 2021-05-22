let aboutImg1 = document.getElementsByClassName("about-img")[0];
let aboutImg2 = document.getElementsByClassName("about-img")[1];
let aboutImg3 = document.getElementsByClassName("about-img")[2];
let aboutImg4 = document.getElementsByClassName("about-img")[3];

aboutImg1.addEventListener("click", function() {
    aboutImg1.classList.remove("animate__zoomInLeft")
    aboutImg1.classList.toggle("animate__tada")
})

aboutImg2.addEventListener("click", function() {
    aboutImg2.classList.remove("animate__zoomInRight")
    aboutImg2.classList.toggle("animate__tada")
})

aboutImg3.addEventListener("click", function() {
    aboutImg3.classList.remove("animate__zoomInLeft")
    aboutImg3.classList.toggle("animate__tada")
})

aboutImg4.addEventListener("click", function() {
    aboutImg4.classList.remove("animate__zoomInRight")
    aboutImg4.classList.toggle("animate__tada")
})


