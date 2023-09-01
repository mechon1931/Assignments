const url = "https://api.thecatapi.com/v1/images/search";

async function fetchCat() {
  try{
    let response = await fetch(url);
    let data = await response.json();
    const imageUrl = data[0].url;
    displayCat(imageUrl)
  } catch(err) {
    console.error("Failed to Fetch", err);
  }
}

function displayCat(imageURL) {

  const catImage = document.querySelector("#cat-image");
  catImage.src = imageURL;
  catImage.alt = "Random Cat Photo";
}

const getCatButton = document.querySelector("#get-cat-button");
