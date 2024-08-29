function handleSubmit(ev) {
  ev.preventDefault();
  const usernameInput = document.querySelector('.username');
  const username = usernameInput.value.trim();

  // Check if username is empty
  if (username === "") {
    alert("There is no username");
    return;
  }

  // Check if there is any error (e.g., username too short)
  if (showError(usernameInput)) {
    return; // Stop submission if there's an error
  }

  // If no error, save to localStorage and proceed with the redirection
  try {
    localStorage.setItem('username', username); // Store username in localStorage.
    window.location.href = '../index.html';
  }
  catch (e) {
    console.error("Error saving username to localStorage:", e);
  }
}

function showError(usernameInput) {
  const errorElement = document.querySelector("#username-error");

  // Check if the username length is less than 3 characters
  if (usernameInput.value.length < 3) {
    errorElement.innerHTML = "<h4>Username must be at least 3 characters long.</h4>";
    errorElement.style.display = 'block';
    return true; // Indicate an error
  }

  errorElement.innerHTML = ""; // Clear error message if no error
  errorElement.style.display = 'none'; // Hide the error message
  return false; // Indicate no error
}

document.querySelector('#registration-form').addEventListener('submit', handleSubmit);
