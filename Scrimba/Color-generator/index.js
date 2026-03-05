const colorPicker = document.getElementById("color-picker")
const modeSelect = document.getElementById("mode-select")
const btn = document.getElementById("get-scheme")
const display = document.getElementById("color-display")

btn.addEventListener("click", fetchColors)

function fetchColors() {
    const seedColor = colorPicker.value.slice(1).toUpperCase()
    const mode = modeSelect.value
    const count = 5
    
    const url = `https://www.thecolorapi.com/scheme?hex=${seedColor}&mode=${mode}&count=${count}`;
 
    fetch(url)
    .then(res => res.json())
    .then(data => {
        display.innerHTML = ''
        data.colors.forEach(colorObj => {
            const hex = colorObj.hex.value
            const div = document.createElement('div')
            div.style.backgroundColor = hex
            div.className = 'color-block'
            div.innerHTML = `<p class="color-text">${hex}</p>` 
            display.appendChild(div)
        })
    })
}

fetchColors()
