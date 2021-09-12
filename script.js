let menuItems = document.getElementById("menuItems");

menuItems.style.maxHeight = "0px";

document.getElementById("dropDown").onclick = function() { menuToggle() };

function menuToggle() {
    if (menuItems.style.maxHeight == "0px") {
        menuItems.style.maxHeight = "200px";
    } else {
        menuItems.style.maxHeight = "0px"
    }
}

let productImg = document.getElementById("product-img");
let smallImg = document.getElementsByClassName("small-img");

smallImg[0].onclick = function() {
    productImg.src = smallImg[0].src;
}
smallImg[1].onclick = function() {
    productImg.src = smallImg[1].src;
}
smallImg[2].onclick = function() {
    productImg.src = smallImg[2].src;
}
smallImg[3].onclick = function() {
    productImg.src = smallImg[3].src;
}