const apiKey = process.env.NEWS_API_KEY;
const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`;

async function fetchNews() {
  try{
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    displayNews(data.articles);
  } catch(error) {
    console.error("There was an error!", error);
  };
};

function displayNews(articles) {
  const newsContainer = document.getElementById("news");

  for (const article of articles) {
    // Create a container div for each article
    const articleContainer = document.createElement("div");
    articleContainer.classList.add("article-container"); // Apply a class for styling

    const titleElement = document.createElement("h2");
    titleElement.textContent = article.title;

    const authorElement = document.createElement("p");
    authorElement.textContent = article.author;

    const descriptionElement = document.createElement("h4");
    descriptionElement.textContent = article.description;

    const urlElement = document.createElement("a");
    urlElement.href = article.url;
    urlElement.textContent = "Read More";

    const imageElement = document.createElement("img");
    imageElement.src = article.urlToImage;
    imageElement.alt = article.title;
    imageElement.classList.add("article-image");

    // Append title, author, and description to the container
    articleContainer.appendChild(titleElement);
    articleContainer.appendChild(authorElement);
    articleContainer.appendChild(descriptionElement);
    articleContainer.appendChild(urlElement);
    articleContainer.appendChild(imageElement);

    // Append the container to the news container
    newsContainer.appendChild(articleContainer);
  }
};

fetchNews();