//variables to store previous and current Yoffset of the window
var prev = window.pageYOffset;
var now;

//event listener when scrolled
window.onscroll = function () {
    now = window.scrollY;
    var btn = document.getElementsByTagName("nav")[0];

    if (now <= 60) {
        btn.style.background = "#0a192f"
    } else {
        btn.style.background = "rgba(239, 239, 239, 0.2)"
    }

    if (now > 70) {
        if (now - prev < 0) {
            btn.style.transform = "translateY(0)";
        } else {
            btn.style.transform = "translateY(-70px)";
            var is_open = document.getElementsByClassName('open');
            if (is_open.length > 0) {
                menuOpen()
            }
        }
    }
    prev = window.pageYOffset;
};
window.onload = () => {
    document.addEventListener('swiped-right', menuOpen);
    document.addEventListener('swiped-left', menuOpen);
}
function menuOpen() {
    document.getElementsByClassName("nav-links")[0].classList.toggle("open");
    let page = document.getElementsByClassName("page");
    document.getElementsByClassName("burger")[0].classList.toggle("menuAnimate");
}

