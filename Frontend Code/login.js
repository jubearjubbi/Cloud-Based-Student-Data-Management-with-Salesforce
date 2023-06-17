
function login() {
 const username = document.getElementById("username").value;
 const password = document.getElementById("password").value;

 // Check if the username and password match
 if (username === "rayalaseemauniversity@gmail.com" && password === "RU@gmail.com") {
   // Open another file link
   window.open("http://127.0.0.1:5500/Frontend%20Code/SF/RU%20sdef.html" , "_blank");
 } else {
   // Show an error message
   alert("Invalid username or password. Please try again.");
 }
}
