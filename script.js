document.getElementById('fetchVerse').addEventListener('click', function() {
  //fetch('https://api.bibleapi.co/v1/verses/random')
  fetch('https://bible-api.com/?random=verse')
  .then(response => response.json())
  .then(data => {
      document.getElementById('verseDisplay').textContent = `"${data.text}" - ${data.book.name} ${data.chapter}:${data.verse}`;
  })
  .catch(error => {
      console.error('Error fetching the verse:', error);
      document.getElementById('verseDisplay').textContent = "Failed to load verse.";
  });
});
