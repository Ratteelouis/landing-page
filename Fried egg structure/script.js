let slideIndex = 1;

function currentSlide(n) {
    imageSlide(slideIndex = n);
}

function imageSlide(n) {
    let slide = document.getElementsByClassName("con-img");
    let dots = document.getElementsByClassName("dot");
    let textname = document.getElementsByClassName("textname");

    for (let i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active2", "")
    }
    
    for (let i = 0; i < textname.length; i++) {
        textname[i].className = textname[i].className.replace(" active1", "")
    }

    slide[slideIndex-1].style.display = "block"
    dots[slideIndex-1].className += " active2"
    textname[slideIndex-1].className += " active1"

}

imageSlide(slideIndex)