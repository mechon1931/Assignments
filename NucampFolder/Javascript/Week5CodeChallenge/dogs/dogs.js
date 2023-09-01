const url = 'https://dog.ceo/api/breeds/image/random';
const numberOfImages = 3;

async function fetchDog() {
  try{
    for(let i = 0; i < numberOfImages; i++) {
      let response = await fetch(url);
      let data = await response.json();
      displayDog(data.message);
    }
  } catch(err) {
    console.error("There was an error!", err);
  };
};

function displayDog(imageURL) {
  const dogCard = document.createElement("div");
  dogCard.classList.add("dog-card");

  const img = document.createElement("img");
  img.src = imageURL;
  img.alt = "Random Dog Photo";
  img.classList.add("dog-image");

  dogCard.appendChild(img);
  document.querySelector("#dog-container").appendChild(dogCard);
}

