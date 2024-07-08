// Get the modal
var modal = document.getElementById("privacy-modal");

// Get the button that opens the modal
var btn = document.getElementById("accept-button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-button")[0];

// When the user clicks the button, open the modal 
window.onload = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks on the button, close the modal
btn.onclick = function() {
    modal.style.display = "none";
    // Here you could also add a function to set a cookie indicating the user has accepted the policy
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
