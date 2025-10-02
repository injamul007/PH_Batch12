// //? JSON in JS

// fetch("https://jsonplaceholder.typicode.com/todos/1")
// .then(res => res.json())
// .then(data => console.log(data))


document.getElementById('load_btn').addEventListener('click', () => {
  const newAPI = fetch('https://openapi.programming-hero.com/api/word/5')
  //? promise of response
  .then(res => res.json())
  //? promise of json data
  .then(data => console.log(data));
  const newH2 = document.createElement('h2')
  // newH2.innerHTML = [];
  document.body.append(newH2);
});

const loadPost = () => {
  const url = 'https://jsonplaceholder.typicode.com/users'
  fetch(url)
  .then(res => res.json())
  .then(jsonData => displayPost(jsonData))
}

loadPost()

const displayPost = (posts) => {
  //?1. get the container and empty the container
  const postContainer = document.getElementById('post_container');
  postContainer.innerText = '';
  posts.forEach(post => {
    // console.log(post)
    //?2. create new element
    const postCard = document.createElement('div')
    postCard.innerHTML = `<div class="postCard">
      <h2>Name: ${post.name}</h2>
      <h3>Username: ${post.username}</h3>
      <p>Email: ${post.email}</p>
      <p>Address: ${post.address.street}</p>
      <h4>Phone Number: ${post.phone}</h4>
      <p>Website: ${post.website}</p>
      <p>Company name: ${post.company.name}</p>
    </div>`
    //?3. add li into container
    postContainer.append(postCard);
  });
}

// displayPost([23])

// async function loadData() {
//   let res = await fetch('https://openapi.programming-hero.com/api/word/5')
//   let data = await res.json();
//   console.log(data)
// }

// loadData();

// console.log(newAPI)

// console.log(result)
// const person = {
//   name: 'selim',
//   fruit: 'dalim',
//   dish: 'halim',
//   friends: ['alim','kolim','lamim'],
//   isRich: false,
//   money: 34000,
// };

// console.log(person, typeof person)

// //? JSON Game is ON
// //? JSON.stringify --> converts object/arrays into JSON data format which is string
// //? JSON.parse --> this method converts the JSON.stringify data format file into OBJECT !!

// const perosnJSON = JSON.stringify(person,'personInfo');

// const perosnJSONParse = JSON.parse(perosnJSON);

// console.log(perosnJSON, typeof perosnJSON)
// console.log(perosnJSONParse, typeof perosnJSONParse)
