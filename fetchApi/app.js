
const searchInput = document.querySelector('.search');
const ul = document.querySelector('ul');

const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

fetch(endpoint)
  .then(res => res.json())
  .then(function(myJson) { 
    
    searchInput.addEventListener('keyup', function() {
      const searchInputTerm = this.value.toLowerCase();
      let results = '';

      myJson.filter(state => {
        let searchInputCity = state.city.toLowerCase();
        let searchInputState = state.state.toLowerCase();
        
        if (searchInputCity.includes(searchInputTerm) || searchInputState.includes(searchInputTerm)) {

          const regex = new RegExp(searchInputTerm, 'gi');
          const span = `<span class="hl">${searchInputTerm}</span>`;
          const city = state.city.replace(regex, span);
          const stateName = state.state.replace(regex, span);
          
          results += `
            <li>
              <span class="name">${city}, ${stateName}</span> 
              <span class="population">${commasToNr(state.population)}</span>
            </li>
          `;
          
        }
        
      });
      
      ul.innerHTML = results;

      addFilters(searchInputTerm);
    });
  })


function commasToNr(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');  
}

function addFilters(searchInputTerm) {
  const list = document.querySelectorAll('li');
  if (list.length > 2 && searchInputTerm.length === 0) {
    let filters = `
    <li>Filter for a city</li>
    <li>or a state</li>
    `;
    ul.innerHTML = filters;
  } 
}