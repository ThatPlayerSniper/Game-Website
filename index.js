function myNavBar() {
    var x = document.getElementById("navBarResposive");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}