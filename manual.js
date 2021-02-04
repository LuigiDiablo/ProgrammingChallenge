
function jumpToHeader(header) {
    window.location.hash = `header${header}`;
    let headerLinkEle = document.getElementById(`header-link${header}`);
    document.getElementById(`header-link1`).classList.remove("active");
    document.getElementById(`header-link2`).classList.remove("active");
    document.getElementById(`header-link3`).classList.remove("active");
    document.getElementById(`header-link4`).classList.remove("active");
    document.getElementById(`header-link5`).classList.remove("active");
    headerLinkEle.classList.add("active");
}

// When the user scrolls the page, execute myFunction
window.onscroll = function() {checkSticky()};

// Add the sticky class to the sidenav when you reach its scroll position. Remove "sticky" when you leave the scroll position
function checkSticky() {
    // Get the sidenav
    let sidenav = document.getElementById("sidenav-content");
    let content = document.getElementById("content");
    // Get the offset position of the sidenav
    let sticky = content.offsetTop;
    if (window.pageYOffset >= sticky) {
        sidenav.classList.add("sticky");
        content.classList.add("content-margin");
    } else {
        sidenav.classList.remove("sticky");
        content.classList.remove("content-margin");
    }
}