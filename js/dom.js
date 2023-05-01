const $ =(selector) => document.querySelector(selector);

const paises = $('#paises')

const newCard = (obj) => {

  const div =document.createElement ('div')
  div.className = 'card col cartt';
  div.id = obj.name.common;
  div.innerHTML =`
      <div class="type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">
        <img  class="w-100" src=${obj.flags.svg} alt="img" >
      </div>
      <div class="card-content">
        <h3>${obj.name.common}</h3>
        <ul>
          <li>Population: ${obj.population}</li>
          <li>Region: ${obj.region}</li>
          <li>Sub Region: ${obj.subregion}</li>
          <li>Capital: ${obj.capital}</li>
        </ul>
      </div> 
      `
      return div
}

const showCards = (arr) => {
  paises.innerHTML = '';
  arr.forEach( element => {
  const card = newCard(element);
  paises.appendChild(card);
 })
}

const listaRegiones =(ciudades) => {
const regiones = $('#regiones')
ciudades.forEach(element => {
  const li = document.createElement('li');
  li.className = `` 
  li.innerHTML = `<a class="dropdown-item" href="#">${element}</a>` 
  regiones.appendChild(li);
});
}


const cardUnica = $('#cardUnica')

const nuevaCard = (obj) => {

  const div =document.createElement ('div')
  div.className = 'card ';
  div.innerHTML =
` <div>
<img src="=${obj.flags.svg}" alt="">
<div>
<div>
  <p>Native name:${obj.name.common} </p>
  <p>Population: ${obj.population}</p>
  <p>Region:  ${obj.region}</p>
  <p>Sub Region: ${obj.subregion}</p>
  <p>Capital: ${obj.capital}</p>
</div>
<div>
  <p>Top Level Domain: </p>
  <p>Currencies: </p>
  <p>Languages: </p>
</div>
<div>Border Countries: </div>
</div>`
return div
}

const mostrarCard = (arr) => {
  cardUnica.innerHTML = '';
  arr.forEach( element => {
  const card = nuevaCard(element);
  cardUnica.appendChild(card);
 })
}




export default {
    newCard,
    showCards,
    $,
    listaRegiones,
    mostrarCard,
    nuevaCard,
    paises,
    
}