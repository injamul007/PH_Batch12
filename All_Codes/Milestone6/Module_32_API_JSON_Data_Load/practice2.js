//? Practice task 2 using API 

const loadusersData = async () => {
  const api = 'https://jsonplaceholder.typicode.com/users';
  const res = await fetch(api);
  const usersData = await res.json();
  displayDataLoad(usersData);
}
loadusersData();

const displayDataLoad = (users) => {
  console.log(users)
  const usersContainer = document.getElementById('users_container');
  users.forEach(user => {
    const userCard = document.createElement('div');
    userCard.innerHTML = `<div class="userCard">
      <h2>name: ${user.name}</h2>
      <h4>username: ${user.username}</h4>
      <h4>email: ${user.email}</h4>
      <ol>address:
        <li>street: ${user.address.street}</li>
        <li>suite: ${user.address.suite}</li>
        <li>city: ${user.address.city}</li>
        <li>zipcode: ${user.address.zipcode}</li>
        <li id="geoList">geo:
          <li>lat: ${user.address.geo.lat}</li>
          <li>lng: ${user.address.geo.lng}</li>
        </li>
      </ol>
      <h4>Phone: ${user.phone}</h4>
      <h4>website: ${user.website}</h4>
      <ol>company:
        <li>name: ${user.company.name}</li>
        <li>catchPhrase: ${user.company.catchPhrase}</li>
        <li>bs: ${user.company.bs}</li>
      </ol>
    </div>`;
    usersContainer.append(userCard);
  });
}