window.addEventListener('scroll', displayHeader, false);

function displayHeader() {
    var header = document.querySelector('#header-main');
    var Xpos = window.scrollY;
    if (Xpos > 90) {
        header.style.transform = "translateY(0px)";
        header.style.opacity = "1";


    }
    if (Xpos < 90) {
        header.style.opacity = "0";
    }
}



var element = document.querySelector(".burger");
element.addEventListener('click', changeBurger, false);

function changeBurger() {
    var header2 = document.querySelector('#header-main');
    var element1 = document.querySelector('.box1');
    var element2 = document.querySelector('.box2');
    var element3 = document.querySelector('.box3');
    element1.classList.toggle("span1");
    element2.classList.toggle("span2");
    element3.classList.toggle("span3");
    header2.style.backgroundColor = "black";
}

var ele = document.querySelector(".burger");
var modal = document.querySelector('.modal');
let isClicked = true;
element.addEventListener('click', displayModal, false);

function displayModal() {
    if (isClicked == true) {
        modal.style.right = "0vw";
        modal.style.display = "block";
        isClicked = false;
    }
    else if (isClicked == false) {
        modal.style.right = "-30vw";
        modal.style.display = "none";
        isClicked = true;
    }
}


