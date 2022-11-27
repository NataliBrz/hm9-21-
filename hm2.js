postButton.onclick = function (event) {
    event.preventDefault();

    let user = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        login: document.getElementById("login").value,
        ID: document.getElementById("number").value,
        password: document.getElementById("pass").value,
        passwordRepeat: document.getElementById("pass2").value,
        phone: document.getElementById("phone").value
    }
    fetch("https://httpbin.org/post",
        {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json charset=utf-8'

            },
        })
        .then(response => response.json())
        .then(user => {
            console.log(user);
        })
        .catch(error => console.log(error))
}