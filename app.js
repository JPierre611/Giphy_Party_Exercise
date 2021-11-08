console.log("Let's get this party started!");

const submit = document.querySelector('#submit');
const term = document.querySelector('#term');
const imgDiv = document.querySelector('#images');
submit.addEventListener('click', processSubmit);

async function processSubmit(evt) {
  evt.preventDefault();
  try {
  const res = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${term.value}&api_key=AfZeQnojXN9njdtDXRumxzaOBZUC5sQp`);
  const url = res.data.data[0].images.fixed_width.url;
  console.log(url);
  const imgTag = document.createElement('img');
  imgTag.setAttribute('src', url);
  imgDiv.append(imgTag);
  } catch(e) {
    alert('Could not find a GIF with your submission! Please try again!');
  }
  term.value ='';
}


