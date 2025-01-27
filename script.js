//your JS code here. If required.
var form = document.getElementById('yourFormId');

// Add event listener for form submission
form.addEventListener('submit', function(event) {
    // Prevent default form submission
    event.preventDefault();

    // Get values of fields
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var checkbox = document.getElementById('checkbox').checked;

    // If checkbox is checked, store username and password in local storage
    if (checkbox) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
    } else {
        // If checkbox is not checked, remove username and password from local storage
        localStorage.removeItem('username');
        localStorage.removeItem('password');
    }

    // Display alert
    alert('Logged in as ' + username);
});