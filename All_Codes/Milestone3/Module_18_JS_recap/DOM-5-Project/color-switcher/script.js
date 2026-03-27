const body = document.querySelector("body");
const applyClrBtn = document.querySelector(".apply_clr_btn");
const colorInputField = document.querySelector(".color_input_field");
const randomClrBtn = document.querySelector(".random_clr_btn");
const colorValueField = document.querySelector(".color_value_field");


const colorArray = ['red', 'blue', 'green','lightgreen', 'yellow', 'gold', 'tomato', 'teal', 'cyan', 'lightcoral', 'aqua', 'white', 'black', 'skyblue', 'lightblue', 'brown', 'darkred' ,'chocolate', 'pink', 'magenta']

const colorChanger = (color) => {
  body.style.backgroundColor = color;
  colorValueField.innerText = color;
}


const handleApplyClrBtnClick = () => {
  colorChanger(colorInputField.value)
}

const handleRandomClrBtnClick = () => {
  const randomNumberArray = Math.floor(Math.random() * colorArray.length-1) + 1
  colorChanger(colorArray[randomNumberArray])
}

applyClrBtn.addEventListener("click", handleApplyClrBtnClick);

randomClrBtn.addEventListener('click', handleRandomClrBtnClick)