//? Practice API task

//? task-1

const commentsApiLoad = async () => {
  const api = 'https://jsonplaceholder.typicode.com/comments';
  const res = await fetch(api);
  const jsonData = await res.json();
  displayDataLoad(jsonData);
}
commentsApiLoad();

const displayDataLoad = (comments) => {
  const commentsContainer = document.getElementById('comments_container');
  comments.forEach(comment => {
    const commentCard = document.createElement('div');
    commentCard.innerHTML = `<div class="commentCard">
        <h2>Title: ${comment.name}</h2>
        <h4>Email: ${comment.email}</h4>
        <p>Body: ${comment.body}</p>
      </div>`;
      commentsContainer.append(commentCard)
  });
}