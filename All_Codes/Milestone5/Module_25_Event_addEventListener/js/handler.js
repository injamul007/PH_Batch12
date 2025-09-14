//?

// console.log('its working')

const titleBtn = document.getElementById('title_btn');

titleBtn.addEventListener('click', function() {
  const h1 = document.getElementById('h1');
  console.log(h1)
  h1.innerText = 'Updated page title text';
})


//?
const loginBtn = document.getElementById('login_btn');


loginBtn.addEventListener('click', function() {
  const loginInfo = document.getElementById('user_info');
  const inputInfo = document.getElementById('input_info');
  const name = inputInfo.value;
  loginInfo.innerText = name;
  inputInfo.value = '';
})


