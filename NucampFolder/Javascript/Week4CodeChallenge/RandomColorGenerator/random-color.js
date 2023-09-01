const HexLetters = "0123456789ABCDEF";
const colorBtn = document.getElementById("colorBtn");
const colorCode = document.getElementById("colorCode");
const resetBtn = document.getElementById("resetBtn");



function getRandomColor() {
  let color = "#";
  
  for(let i = 0; i < 6; i++) {
    let randomIndex = Math.floor(Math.random() * 16);
    color += HexLetters[randomIndex];
  }
  return color;
};

getRandomColor();

function getColorBtn() {
  colorBtn.addEventListener("click", function() {
    const randomColor = getRandomColor();

    colorCode.textContent = randomColor;
    document.body.style.backgroundColor = randomColor;
  })
};

getColorBtn();

function hoverColorBtn() {
  colorBtn.addEventListener("mouseover", function() {
    this.style.backgroundColor = "red";
  });

  colorBtn.addEventListener("mouseout", function() {
    this.style.backgroundColor = '#007bff'
  });
};

hoverColorBtn();

function resetButton() {
  resetBtn.addEventListener("click", function() {
    document.body.style.backgroundColor = "#FFFFFF";
    document.getElementById("colorCode").innerText = "#FFFFFF";
  })
};

resetButton();

function hoverResetBtn() {
  resetBtn.addEventListener("mouseover", function() {
    this.style.backgroundColor = "red";
  });

  resetBtn.addEventListener("mouseout", function() {
    this.style.backgroundColor = '#007bff'
  });
};

hoverResetBtn();