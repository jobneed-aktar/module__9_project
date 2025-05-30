const gallery = document.getElementById('gallery');
fetch('https://picsum.photos/v2/list?page=2&limit=12')
  .then(response => response.json())
  .then(data => {
    data.forEach(photo => {
      const imageCard = document.createElement('div');
      imageCard.classList.add('gallery-item');

      imageCard.innerHTML = `
        <img src="${photo.download_url}" alt="${photo.author}">
        <div class="info" style="padding: 10px;">
          <p>Author: ${photo.author}</p>
        </div>
      `;

      gallery.appendChild(imageCard);
    });
  })
  .catch(error => {
    console.error('Error fetching photos:', error);
    gallery.innerHTML = `<p style="color: red; text-align:center;">Failed to load images. Try again later.</p>`;
  });
