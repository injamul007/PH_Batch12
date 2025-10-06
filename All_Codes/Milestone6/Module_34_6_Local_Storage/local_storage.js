//? Local Storage in js

const addToLocalStorage = () => {
  const number = Math.floor(Math.random()*100)+1
  console.log(number)
  localStorage.setItem('number', number);
}

const getNumbersFromLS = () => {
  const number = localStorage.getItem('number')
  console.log('from local storage', number)
}

const setObjectToLS = () => {
  const personInfo = {
    name: 'KarimUllah',
    age: 60,
    job: 'retired',
    hasWife: true,
    children: '2 kids',
  };

  const saveInLS = localStorage.setItem('infoOfKarimUllah', JSON.stringify(personInfo));
  console.log(personInfo,saveInLS)
  // return personInfo
}

const getObjectFromLS = () => {
  const personInfo = JSON.parse(localStorage.getItem('infoOfKarimUllah'))
  // const personInfo = localStorage.getItem('infoOfKarimUllah')
  console.log(personInfo.name)
}