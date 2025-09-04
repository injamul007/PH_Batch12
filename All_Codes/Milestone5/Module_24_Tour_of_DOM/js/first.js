//?

const allTagSelection = document.getElementsByTagName('section');

// console.log(allTagSelection)


function changeIt() {
  let para = document.getElementById('para');
  para.innerText = 'New picture'
  para.style.color = 'blue'
  let imgTag = document.getElementById('imgTag');
  imgTag.setAttribute("src", "img/new.jpg");
}