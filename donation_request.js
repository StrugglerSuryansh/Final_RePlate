document.getElementById('donationRequestForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission

    const foodType = document.getElementById('foodType').value;
    const foodTemperature = document.getElementById('foodTemperature').value;
    const pickupSchedule = document.getElementById('pickupSchedule').value;
    const photoUpload = document.getElementById('photoUpload').files[0];

    if (!foodType || !foodTemperature || !pickupSchedule || !photoUpload) {
        alert('Please fill all fields!');
        return;
    }

    // Handle form submission logic (e.g., send data to server)
    alert(`Donation Request Submitted!\nFood Type: ${foodType}\nFood Temperature: ${foodTemperature}\nPick-Up Schedule: ${pickupSchedule}\nPhoto: ${photoUpload.name}`);

    // Reset the form after submission
    document.getElementById('donationRequestForm').reset();
});
