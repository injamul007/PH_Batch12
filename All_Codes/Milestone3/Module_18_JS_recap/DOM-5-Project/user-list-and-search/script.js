const userContainer = document.querySelector(".userContainer");
const searchInput = document.getElementById('searchInput')

const users = [
  {
    profileImg: "https://i.ibb.co.com/39SR4QCh/model-1.png",
    name: "Alicia Williams",
    email: "alicia007william@gmail.com",
  },
  {
    profileImg: "https://i.ibb.co.com/YFjTTpHJ/model-2.png",
    name: "Salina Micheal",
    email: "salina00micheal@gmail.com",
  },
  {
    profileImg: "https://i.ibb.co.com/LsDZnzx/model-3.png",
    name: "Rodrigo Jon",
    email: "rodrigo007jon@gmail.com",
  },
  {
    profileImg: "https://i.ibb.co.com/Ng3BH60W/model-4.png",
    name: "Peter Matthew",
    email: "peter012matthew@gmail.com",
  },
  {
    profileImg: "https://i.ibb.co.com/v6c0v4XG/model-5.png",
    name: "alice Johnson",
    email: "alice123johnson@gmail.com",
  },
];

function renderUsers(arr) {
  userContainer.innerHTML = ''
  arr.map((item) => {
  const divElem = document.createElement("div");
  divElem.className = 'userItem'
  divElem.innerHTML = `<img src=${item.profileImg} alt=${item.name}>
  <div class='userInfo'>
    <h3>${item.name}</h3>
    <p>${item.email}</p>
  </div>`;

  userContainer.append(divElem);
});
}

renderUsers(users)

const handleSearchValue = (e) => {
  const searchValue = e.target.value
  const filteredUsers = users.filter(filterItem => {
    return filterItem.name.toLowerCase().includes(searchValue.toLowerCase()) || filterItem.email.toLowerCase().includes(searchValue.toLowerCase())
  })
  if(filteredUsers.length === 0) {
    userContainer.innerHTML = 'No User Found for This Search'
  } else {
    renderUsers(filteredUsers)
  }
}

searchInput.addEventListener('input', handleSearchValue)