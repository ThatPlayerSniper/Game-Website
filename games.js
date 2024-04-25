//Nav Bar resposive behavior

function myNavBar() {
    var x = document.getElementById("navBarResposive");
    if (x.className === "navBarNavi") {
        x.className += " responsive";
    } else {
        x.className = "navBarNavi";
    }
}