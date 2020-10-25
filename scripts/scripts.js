/* Toggle between adding and removing the "responsive" 
class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("nav-bar");
    if (x.className === "header") {
        x.className += " responsive";
    } else {
        x.className = "header";
    }
}

// Get the container element
var btnContainer = document.getElementById("nav-bar-right");

// Get all buttons with class="button" inside the container
var btns = btnContainer.getElementsByClassName("button");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");

    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    // Add the active class to the current/clicked button
    this.className += " active";
  });
}