const apiurl = "https://v2.jokeapi.dev/joke/Programming?type=single";

async function getJock(){
    const response = await fetch(apiurl);
    var data = await response.json();

    const joke = data.joke;

    document.querySelector(".middle p").innerHTML = joke;
}

document.querySelector("button").addEventListener("click", function(){
    getJock();
})