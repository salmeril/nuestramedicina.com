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


function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

// Check if the cookie is already set
window.onload = function() {
    var accepted = getCookie("privacyAccepted");
    if (!accepted) {
        modal.style.display = "block";
    }
}

// When the user clicks the button, close the modal and set the cookie
btn.onclick = function() {
    modal.style.display = "none";
    setCookie("privacyAccepted", "true", 365);
}
