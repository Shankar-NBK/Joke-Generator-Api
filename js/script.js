let jokecontainer = document.getElementById("joke");
let btn = document.getElementById("btn");
let url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";


let getJoke = () => {
    fetch(url)
        .then(data => data.json())
        .then(item => {
           // console.log(item);
            jokecontainer.textContent = `${item.joke}`;
        });
}

btn.addEventListener("click", getJoke);

getJoke();