var sideBar = document.getElementById("sideBar");
var cover = document.getElementById("cover");



function showSideBar(){
    var pageLang = document.querySelector("html").getAttribute("lang");
    if (pageLang == "ar") {
        sideBar.style.left = "0";
        cover.setAttribute("class", "cover");
        sideBar.style.right = "calc(100vw - min(250px, 50%))";
    } else {
        sideBar.style.right = "0";
        sideBar.style.left = "calc(100vw - min(250px, 50%))";
        cover.setAttribute("class", "cover");
    }
}
function hideSideBar(){
    var pageLang = document.querySelector("html").getAttribute("lang");
    if (pageLang == "ar") {
        sideBar.style.left = "-100%";
        sideBar.style.right = "100vw";
        cover.setAttribute("class", "noncover");
    } else { 
        sideBar.style.right = "-100%";
        sideBar.style.left = "100vw";
        cover.setAttribute("class", "noncover");
    }
}