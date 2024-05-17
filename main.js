$(document).ready(function() {
    function login() {
        let username = $('#username').val();
        let password = $('#password').val();
        
        if(username === "user" && password === "pass") { 
            $('#greeting').text("Hello, " + username).show();
            $('#error').hide();
        } else {
            $('#error').text("Incorrect username or password.").show();
            $('#username, #password').val('');
        }
    }

    $('#loginButton').click(function() {
        login();
    });

    function showFields() {
        let selectedType = $('#ticketType').val();
        $('#computerFields, #softwareFields, #networkFields').hide();
        if (selectedType === 'computer') {
            $('#computerFields').show();
        } else if (selectedType === 'software') {
            $('#softwareFields').show();
        } else if (selectedType === 'network') {
            $('#networkFields').show();
        }
    }

    $('#ticketType').change(function() {
        showFields();
    });

    function validateForm() {
        let name = $('#name').val();
        let email = $('#email').val();
        let errorMessages = "";
        
        if (name.trim() === "") {
            errorMessages += "<li>Name cannot be empty.</li>";
        }
        if (email.trim() === "") {
            errorMessages += "<li>Email cannot be empty.</li>";
        } else if (!isValidEmail(email)) {
            errorMessages += "<li>Invalid email format.</li>";
        }
        
        if (errorMessages !== "") {
            $('#errorMessages').html(errorMessages);
            return false; //prevent form submission
        }
        return true; //proceed with form submission
    }

    function isValidEmail(email) {
        let emailRegex = /\S+@\S+\.\S+/;
        return emailRegex.test(email);
    }

    $('#supportForm').submit(function(event) {
        if (!validateForm()) {
            event.preventDefault(); //prevent form from submitting if validation fails
        }
    });

    function checkFormCompletion() {
        let nameFilled = $('#name').val().trim() !== "";
        let emailFilled = $('#email').val().trim() !== "";
        let isFormComplete = nameFilled && emailFilled;
        
        $('#submitButton').prop('disabled', !isFormComplete);
    }

    $('#name, #email').on('input', function() {
        checkFormCompletion();
    });

    checkFormCompletion();
});