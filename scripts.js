// Personalization Features
let textSize = 1; // Initial text size

// Increase Text Size
document.getElementById('increaseText').addEventListener('click', () => {
    textSize += 0.1;
    document.documentElement.style.fontSize = `${textSize}em`;
});

// Decrease Text Size
document.getElementById('decreaseText').addEventListener('click', () => {
    textSize = Math.max(0.5, textSize - 0.1); // Ensure text size doesn't go below 0.5em
    document.documentElement.style.fontSize = `${textSize}em`;
});



// Helper function to get contrasting text color (white or black) based on theme color
function getContrastYIQ(hexcolor){
    hexcolor = hexcolor.replace("#", "");
    var r = parseInt(hexcolor.substr(0,2),16);
    var g = parseInt(hexcolor.substr(2,2),16);
    var b = parseInt(hexcolor.substr(4,2),16);
    var yiq = ((r*299)+(g*587)+(b*114))/1000;
    return (yiq >= 128) ? 'black' : 'white'; // Returns white for dark colors and black for light colors
}

// Doctor search section
const doctors = [
    { name: "Dr. Jane Doe", specialty: "Cardiology", contact: "123-456-7890", city: "london" },
    { name: "Dr. John Smith", specialty: "Dermatology", contact: "987-654-3210", city: "manchester" },
    { name: "Dr. Emma Brown", specialty: "Pediatrics", contact: "955-345-4555", city: "birmingham" },
    { name: "Dr. Michael Lee", specialty: "Neurology", contact: "565-895-5345", city: "liverpool" },
    { name: "Dr. Sarah Johnson", specialty: "General Practice", contact: "375-595-6355", city: "leeds" },
    { name: "Dr. Alex Martinez", specialty: "Orthopedics", contact: "785-855-2155", city: "bristol" },
];

const cities = ["london", "manchester", "birmingham", "liverpool", "leeds", "bristol"];

function searchDoctor() {
    const cityInput = document.getElementById('city').value.toLowerCase().trim();
    const doctorInput = document.getElementById('doctor').value.toLowerCase().trim();
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = ''; // Clear previous results

    // Check if the city is valid
    const isCityValid = cities.includes(cityInput);

    // Check if any doctor exists in the list
    const foundDoctors = doctors.filter(doc => {
        const matchesDoctorName = doc.name.toLowerCase().includes(doctorInput);
        const matchesCity = cityInput === '' || doc.city === cityInput; // Allow city to be ignored if empty
        return matchesDoctorName && matchesCity;
    });

    // Construct results based on matches
    if (foundDoctors.length > 0) {
        resultsContainer.innerHTML = `Found ${foundDoctors.map(doc => doc.name).join(", ")}.<br>
            Specialty: ${foundDoctors.map(doc => doc.specialty).join(", ")}<br>
            Contact: ${foundDoctors.map(doc => doc.contact).join(", ")}`;
    } else {
        resultsContainer.innerHTML = "No results found. Please check the doctor or city name.";
    }
}

// Event listener for the search button
document.getElementById('searchButton').addEventListener('click', searchDoctor);



// Submit Booking Form
function submitBooking(event) {
    event.preventDefault();
    alert("Your appointment has been booked successfully!");
    document.getElementById('bookingForm').reset();
}

// Submit Question Form
function submitQuestion(event) {
    event.preventDefault();
    alert("Your question has been submitted successfully!");
    document.getElementById('questionForm').reset();
}

// Placeholder functions for handling form submissions
function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    console.log("Login with:", email, password);
    // Add your login logic here
}

function handleSignup(event) {
    event.preventDefault();
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;
    const confirmPassword = document.getElementById("signupConfirmPassword").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    console.log("Sign-up with:", email, password);
    // Add your sign-up logic here
}
