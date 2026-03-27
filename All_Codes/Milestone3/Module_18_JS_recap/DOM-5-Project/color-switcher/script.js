const body = document.querySelector("body");
const applyClrBtn = document.querySelector(".apply_clr_btn");
const colorInputField = document.querySelector(".color_input_field");
const randomClrBtn = document.querySelector(".random_clr_btn");
const colorValueField = document.querySelector(".color_value_field");



applyClrBtn.addEventListener("click", () => {
  body.style.backgroundColor = colorInputField.value;
  colorValueField.innerText = colorInputField.value;
});


randomClrBtn.addEventListener('click', ()=> {
  
})