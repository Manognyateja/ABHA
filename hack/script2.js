function generateAbhaNumber() {
    return 'ABHA-' + Math.random().toString().slice(2, 16); // Simulate a unique ABHA number
}

function createAbhaAddress(abhaNumber) {
    return `${abhaNumber}@abdm`;
}

document.getElementById('abhaForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const userId = document.getElementById('userId').value;
    const kycMethod = document.getElementById('kycMethod').value;
    
    if (userId.match(/^[a-zA-Z0-9]{1,20}$/)) {
        const abhaNumber = generateAbhaNumber();
        const abhaAddress = createAbhaAddress(abhaNumber);

        document.getElementById('abhaNumber').innerText = `ABHA Number: ${abhaNumber}`;
        document.getElementById('abhaAddress').innerText = `ABHA Address: ${abhaAddress}`;
        document.getElementById('result').classList.remove('hidden');

        document.getElementById('downloadCard').onclick = function() {
            alert('ABHA Card downloaded (simulation)');
        };

        document.getElementById('profileUpdateForm').classList.remove('hidden');
    } else {
        alert('Invalid User ID! Please use 1-20 alphanumeric characters.');
    }
});

document.getElementById('profileUpdateForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const newUserId = document.getElementById('newUserId').value;
    if (newUserId.match(/^[a-zA-Z0-9]{1,20}$/)) {
        alert(`Profile updated successfully! New User ID: ${newUserId}`);
        document.getElementById('newUserId').value = ''; // Clear the input
    } else {
        alert('Invalid New User ID! Please use 1-20 alphanumeric characters.');
    }
});
