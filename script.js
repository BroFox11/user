let username;

document.getElementById("mySubmit").onclick = function() {
    username = document.getElementById("myText").Value;

    document.getElementById("welcome").textContent = `Hello, ${username}!` ; 
}




