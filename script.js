const APIURL1 = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const APIURL2 = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=2";
const APIURL3 = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=3";
const APIURL4 = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=4";
const APIURL5 = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=5";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const content = document.querySelector(".content");
const getmovies = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    showMovies(data);
}
getmovies(APIURL1)
getmovies(APIURL2)
getmovies(APIURL3)
getmovies(APIURL4)
getmovies(APIURL5)

const showMovies = (data) => {
    content.innerHTML = "";
    const sortedMovies = data.results.sort((a, b) => b.vote_average - a.vote_average);
    sortedMovies.forEach(
        (result) => {
            const imagepath = result.poster_path == null ? "img/img-missing.png" : IMGPATH + result.poster_path
            const box = document.createElement("div");
            box.classList.add("box");
            box.innerHTML = `
            <img src="${imagepath}" alt="">
                <div class="overlay">
                    <div class="title">
                        <h2>${result.original_title}</h2>
                        <div class="rating">${result.vote_average}</div>
                    </div>

                    <h3>Overview:</h3>
                    <p>
                        ${result.overview}
                    </p>

                </div>
            `
            content.appendChild(box)
        }
    );
}
document.querySelector("#search").addEventListener(
    "keyup", function (event) {
        if (event.target.value!= "") {
            getmovies(SEARCHAPI + event.target.value);
        }
        else {
            getmovies(APIURL1)
            getmovies(APIURL2)
            getmovies(APIURL3)
            getmovies(APIURL4)
            getmovies(APIURL5)
        }
    }
)
