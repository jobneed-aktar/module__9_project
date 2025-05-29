const tableBody = document.querySelector("#post-table tbody");

fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response)=>response.json())
  .then((posts)=>{
  posts.forEach(post => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${post.id}</td>
      <td>${post.title}</td>
      <td>${post.body}</td>
    `;
    tableBody.appendChild(row);
  });
})