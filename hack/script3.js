document.getElementById('profileForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;

    if (name && email && phone && address) {
        // Here, you would typically send the data to the server using an AJAX request.
        // For demonstration purposes, we will simply display a success message.

        document.getElementById('success-message').innerText = "Profile updated successfully!";
    } else {
        document.getElementById('success-message').innerText = "Please fill out all fields.";
        document.getElementById('success-message').style.color = 'red';
    }
});