// index.js

document.addEventListener("DOMContentLoaded", () => {
    const search = document.getElementById("search-input");
    
    if (search) {
        console.log("Search input found!", search);
        
        search.addEventListener("input", (e) => {
            console.log("Typing:", e.target.value);
            // Later: call your OMDB API here
        });
    } else {
        console.error("Search input not found in HTML");
    }
});