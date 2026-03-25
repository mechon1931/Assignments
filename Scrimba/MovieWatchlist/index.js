const search = document.getElementById("search-input");
const searchbtn = document.getElementById("search-button")
const movies = document.getElementById("movie-list")

searchbtn.addEventListener('click', () => {
        
    let searchtext = search.value
    
    fetch(`https://www.omdbapi.com/?t=${searchtext}&plot=short&apikey=e7bfc93d`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        
        if (searchtext === '') {
            searchBarEmpty() 
        } else {
            movies.innerHTML = ""
            addMovieToPage(data)
        }       
    }) 
}) 

function addMovieToPage(movie) {
    movies.classList.remove("movie-list")
    movies.classList.add("movie-list-nobg")
    
        const html = `
            <div class="movie-container">
                <img class="movie-poster" src=${movie.Poster} />
                <div class="movies-container">
                    <div class="movie-title">${movie.Title}</div>
                    <div class="movie-ratings">⭐ ${movie.Ratings[0].Value}</div>
                    <div class="movie-data">
                        <p class="movie-time">${movie.Runtime}</p>
                        <p class="movie-genre">${movie.Genre}</p>
                        <div class="watchlist">
                            <img class="add-button" id="add-button" src="/images/add_10238004.png"/>
                            <p>
                                    Watchlist
                            </p>
                        </div>
                    </div>
                    <p class="movie-plot">${movie.Plot}</p>
                </div>
            </div>
            <hr></hr>
        `
        movies.innerHTML += html
}

function searchBarEmpty() {
    movies.classList.remove("movie-list")
    movies.classList.add("movie-list-nobg")
    
    const html = `
        <div>
            <h3 class="movie-list-nobg">Unable to find what you’re looking for. Please try another search.</h3>
        </div>
    `
    movies.innerHTML += html
}