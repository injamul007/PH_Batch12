//?
const parentContainer = document.getElementById('parent_container');
    const addBtn = document.getElementById('add_name_btn');
    addBtn.addEventListener('click', function() {
      const inputName = document.getElementById('input_name');
      const textName = inputName.value;
      console.log(textName)
      inputName.value = '';
      const newLi = document.createElement('li');
      newLi.innerText = textName;
      parentContainer.appendChild(newLi)
    })
    
    parentContainer.addEventListener('click', function(event) {
      event.target.parentNode.removeChild(event.target)
    })