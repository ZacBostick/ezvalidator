function validateString(input, min, max) {
    if (typeof input !== 'string') {
        return false;
    }
    if (input.length < min || input.length > max) {
        return false;
    }
    return true;
}

function validateNumber(input, min, max) {
    if (typeof input !== 'number') {
        return false;
    }
    if (input < min || input > max) {
        return false;
    }
    return true;
}

function validateDate(input, min, max) {
    const dateInput = new Date(input);
    if (isNaN(dateInput)) {
        return false;
    }
    if (dateInput < new Date(min) || dateInput > new Date(max)) {
        return false;
    }
    return true;
}

function validate(input, type, min, max) {
    switch (type) {
        case 'string':
            return validateString(input, min, max);
        case 'number':
            return validateNumber(input, min, max);
        case 'date':
            return validateDate(input, min, max);
        case 'email':
            return validateEmail(input);
        case 'phoneNumber':
            return validatePhoneNumber(input);
        case 'url':
            return validateURL(input);
        case 'password':
            return validatePassword(input, min, max);
        default:
            return false;
    }
}

function validateEmail(input) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(input);
}

function validatePhoneNumber(input) {
    const regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3,}[^\s]+$/;
    return regex.test(input);
}


function validateURL(input) {
    const regex = /^(ftp|http|https):\/\/[^ "]+$/;
    return regex.test(input);
}

function validatePassword(input, min, max) {
    // Check if the password length is within the defined range
    if (input.length < min || input.length > max) {
        return false;
    }

    // Password strength conditions
    const hasUpperCase = /[A-Z]/.test(input);
    const hasLowerCase = /[a-z]/.test(input);
    const hasNumber = /\d/.test(input);
    const hasNonAlphanumeric = /\W/.test(input);

    // Ensure all conditions are met
    return hasUpperCase && hasLowerCase && hasNumber && hasNonAlphanumeric;
}

module.exports = {
    validate,
    validateEmail,
    validatePhoneNumber,
    validateURL,
    validatePassword
};
