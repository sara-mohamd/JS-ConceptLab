# AccountCreationForm

**AccountCreationForm** is a simple, single-page JavaScript project designed to demonstrate user input validation and real-time feedback using vanilla JavaScript. This project focuses on creating a registration form with various input validations and responsive design features.

## Features

- **Username Validation**: Checks if the username is at least 3 characters long and provides real-time feedback.
- **Password Validation**: Ensures the password meets minimum length requirements and displays feedback on input blur.
- **Email Validation**: Validates email format and shows appropriate error messages.
- **Confirm Password Field**: Confirms that the password and confirmation match.
- **Password Strength Indicator**: Provides feedback on password strength with visual cues.
- **Error Handling**: Displays clear and actionable error messages for invalid inputs.
- **Form Reset**: Includes a button to reset the form and clear error messages.
- **Async Validation**: Simulates asynchronous username availability check (optional).
- **User Feedback**: Shows a success message or redirects on successful form submission.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/UserSignupForm.git
    ```

2. Navigate to the project directory:
    ```bash
    cd UserSignupForm
    ```

3. Open `index.html` in your preferred web browser to view the project.

## Usage

1. Open `index.html` in a web browser.
2. Enter a username, email, and password to test the validation features.
3. Click the "Register" button to simulate form submission.
4. Error messages and feedback will be displayed for invalid inputs.

## Code Structure

- **`index.html`**: Contains the HTML structure of the form.
- **`styles.css`**: Provides styling for the form and validation feedback.
- **`script.js`**: Contains JavaScript code for form validation and event handling.

## Example Code

**HTML:**
```html
<form id="registration-form">
  <label for="username">Username:</label>
  <input type="text" id="username" name="username" required>
  <div id="username-error" class="error-message"></div>

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>
  <div id="email-error" class="error-message"></div>

  <label for="password">Password:</label>
  <input type="password" id="password" name="password" required>
  <div id="password-error" class="error-message"></div>

  <label for="confirm-password">Confirm Password:</label>
  <input type="password" id="confirm-password" name="confirm-password" required>
  <div id="confirm-password-error" class="error-message"></div>

  <button type="submit">Register</button>
</form>
