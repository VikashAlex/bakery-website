let top_h = document.querySelector(".top-header")
let headBar = document.getElementById("header")

let mBtn = document.getElementById("mobile_menu")
let mobileNavBar = document.getElementById("mobileNavBar")
let menuBar = document.querySelector(".menu-bar-m")
document.addEventListener("scroll", function () {

    if (scrollY>=100) {
        top_h.classList.add("s-Header-top")
        headBar.classList.add("s-Header")
    }
    else{ 
        headBar.classList.remove("s-Header")
        top_h.classList.remove("s-Header-top")
    }
})

mBtn.addEventListener("click", function () {
    mobileNavBar.style.visibility= "visible";
    mobileNavBar.style.opacity="1";
    document.body.style.overflowY = "hidden";
    document.documentElement.style.overflowY = "hidden";
    menuBar.style.left="0"
    if (mBtn.classList.contains("fa-bars")) {
        mBtn.classList.remove("fa-bars");
        mBtn.classList.add("fa-times");
    }
    
})
mobileNavBar.addEventListener("click", function () {
    mobileNavBar.style.visibility= "hidden";
    mobileNavBar.style.opacity="0";
    document.body.style.overflowY = "auto";
    document.documentElement.style.overflowY = "auto";
    menuBar.style.left="-30%"
    if (mBtn.classList.contains("fa-times")) {
        mBtn.classList.remove("fa-times");
        mBtn.classList.add("fa-bars");
    }
    
})