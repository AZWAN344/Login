function signIn() {
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;
  
    if (email && pass) {
      alert(`Welcome back, ${email}!`);
    } else {
      alert("Please fill in both email and password.");
    }
  }
  