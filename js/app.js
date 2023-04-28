import data from "./data.js";
import dom from "./dom.js";

 const URL ='https://restcountries.com/v3.1/all/ '

 const datos = await data.getData(URL);

 const regiones = data.continentes(datos)

  dom.listaRegiones(regiones)
 
 
 console.log(datos)

 datos.forEach(element => {
   console.log(element)

 const card = dom.newCard(element);


  paises.appendChild(card);
 
 });

 const mundo = [...dom.$('#regiones').children]
 mundo.forEach(lugares => {
  lugares.addEventListener('click', () => {
  let filtro = lugares.textContent;
  const filtered = filtro === '' ? datos : data.filtroRegion(datos, filtro);

  dom.showCards(filtered)
} )
})


const searcontry = dom.$('#searcontry');

searcontry.addEventListener('change',() => {

  let filtro = searcontry.value;
  const filtered = datos.filter(dato => dato.name.common.toLowerCase().includes(filtro.toLowerCase()))
  console.log(filtered)
  
  dom.showCards(filtered)

})


//Dark mode

const html = document.querySelector("html");
const dark = document.querySelector ('#switch');

dark.addEventListener("click", () => {
  html.dataset.bsTheme = html.dataset.bsTheme == "light" ? "dark" : "light";
})







 


