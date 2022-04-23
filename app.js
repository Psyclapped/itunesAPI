const textbox = document.getElementById('search');
const results = document.getElementById('results');

const arr = [];

const search = async () => {
  try {
    const searchContents = textbox.value;
    const res = await fetch(`https://itunes.apple.com/search?term=${searchContents}&media=music&entity=album&attribute=artistTerm&limit=10`);

    arr = await res.json();

    showResults(arr);
  } catch (error) {
    console.log(error);
  }
};

const showResults = (musicResults) => {
  const html = musicResults.results.map((result) => {
    return `
      <div class="result">
        <img src="${result.artworkUrl100}" alt="${result.artistName}">
        <h3>${result.artistName}</h3>
        <h4>${result.collectionName}</h4>
      </div>
    `}).join('');
  results.innerHTML = html;
};

search();