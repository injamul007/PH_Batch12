//?

const handleAddToStorage = () => {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  const newObj = {}
  newObj[name] = email;

  localStorage.setItem('loginInfo', JSON.stringify(newObj));

}


const storedItem = localStorage.getItem('loginInfo');
console.log(JSON.parse(storedItem))

const clearAll = () => {
  localStorage.clear()
}