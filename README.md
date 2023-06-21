
---

# EZValidator

EZValidator is a lightweight JavaScript library for validating common data formats. It provides a set of functions to validate email addresses, phone numbers, URLs, and password strength.

## Installation

You can install EZValidator using npm:

```bash
npm install @zacdbostick/ezvalidator
```

## Usage

Import the necessary functions from the EZValidator package:

```javascript
const { validateEmail, validatePhoneNumber, validateURL, validatePassword } = require('@zacdbostick/ezvalidator');
```

### Email Validation

Check if an email address is valid:

```javascript
const email = 'test@example.com';
const isValidEmail = validateEmail(email);
console.log(`Is ${email} a valid email address? ${isValidEmail}`);
```

### Phone Number Validation

Check if a phone number is valid:

```javascript
const phoneNumber = '+123456789';
const isValidPhoneNumber = validatePhoneNumber(phoneNumber);
console.log(`Is ${phoneNumber} a valid phone number? ${isValidPhoneNumber}`);
```

### URL Validation

Check if a URL is valid:

```javascript
const url = 'https://www.example.com';
const isValidURL = validateURL(url);
console.log(`Is ${url} a valid URL? ${isValidURL}`);
```

### Password Strength Validation

Check if a password meets the required strength criteria:

```javascript
const password = 'StrongPassword1!';
const isValidPassword = validatePassword(password, 8, 20);
console.log(`Is the password strong? ${isValidPassword}`);
```

## Contributing

Contributions are welcome! If you find any issues or want to add new features, feel free to open a pull request.

## License

This project is licensed under the MIT License.

---

Feel free to customize and expand this README according to your preferences. Provide examples, additional usage instructions, or any other relevant information to make it comprehensive and useful for potential users of your EZValidator package.