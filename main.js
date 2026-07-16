// document.getElementById("myForm").addEventListener("submit", function(e){
//     e.preventDefault();

//     let name = document.getElementById("name").value;
//     let email = document.getElementById("email").value;
//     let phone = document.getElementById("phone").value;
//     let password = document.getElementById("password").value;

//     console.log("Name:", name);
//     console.log("Email:", email);
//     console.log("Phone:", phone);
//     console.log("Password:", password);

//     alert("Form Submitted Successfully!");
// });

document.getElementById("myForm").addEventListener("submit", function (e) {

    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let password = document.getElementById("password").value.trim();

    // Empty Field Check
    if (name === "" || email === "" || phone === "" || password === "") {
        alert("All fields are required!");
        return;
    }

    // Email Validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email!");
        return;
    }

    // Phone Validation (Exactly 11 digits)
    let phonePattern = /^\d{11}$/;

    if (!phonePattern.test(phone)) {
        alert("Phone number must contain exactly 11 digits!");
        return;
    }

    // Password Validation (Minimum 8 characters)
    if (password.length < 8) {
        alert("Password must be at least 8 characters!");
        return;
    }

    alert("Registration Successful!");

});


