function onSearch() {
    let gifTheme = document.querySelector('#userSearch').value;
    fetch('https://api.giphy.com/v1/gifs/search?api_key=QUkb68sKQaCconURRHdPfb19ZM17nYp9&limit=5&q=' + gifTheme)
        .then(response => response.json())
        .then(result => {
            const resultDiv = document.querySelector('.result')
            resultDiv.innerHTML = ''
            if (result.data && result.data.length > 0) {
                result.data.forEach(item => {
                    resultDiv.innerHTML += `<img class="pict"src=${item.images.original.url}><br>`
                });
            }
        })
        .catch(error => console.log(error))
}

/*function onSearch() {
    let gitUser = document.getElementById("userSearch").value;

    fetch("https://api.github.com/users/" + gitUser
    )
        .then(response => response.json())
        .then(user => {
            document.getElementById("avatar").src = user.avatar_url;
            document.getElementById("userName").innerText = user.name;
        })
}*/