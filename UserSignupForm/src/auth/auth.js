function handleSubmit(event) {
  event.preventDefault();
  const username = document.querySelector('.username').value.trim();
  if (username === null) {
    alert("There is no username");
    return;
  }

  try {
    localStorage.setItem('username', username); // Store username in localStorage.
    // window.location.href = '../index.html';
  }
  catch (e) {
    console.error("Error saving username to localStorage:", e);
  }
}
