/* Toggle between adding and removing the "responsive" class to nav when the user clicks on the icon */
function responsiveMenu() {
    var x = document.getElementById("main-navigation");
    if (x.className === "main-nav") {
      x.className += " responsive";
    } else {
      x.className = "main-nav";
    }
  } 