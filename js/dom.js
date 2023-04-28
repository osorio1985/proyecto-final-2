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
/* const newCard2 = (obj)=>{
  const div = document.createElement ('div')
  div.className = 'card';
  div.innerHTML =`
  <main class="container col-4" id="banderas"> 
    <div class="card2">

      <div class="card-content"></div>
      <ul>
      <li>Top Level Domain:</li>
      ${obj.tld}
      </ul>
      <ul>
      <il>Currencies</il>
      ${obj.currencies}
    </ul>
    <ul>
      <il>Languages:</il>
      ${obj.laguages}
      </ul>
      <ul>
      <il>Border Countries:</il>
      ${obj.borders}
      </ul>
      
      
    

    </div> 

  </main>
 
  `
  return div

}
 */
export default {
    newCard,
    showCards,
    $,
    listaRegiones,
    
}