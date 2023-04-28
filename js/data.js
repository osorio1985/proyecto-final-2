const getData = async (URL) =>{
    try {
        const response = await fetch(URL);
        const response_1 = await response.json();
        return response_1;
    } catch (error) {
        return error;
    }
};

const continentes = (data) => {
    let conti = data.map(elem => elem.region)
    conti = new Set(conti);
    conti = [...conti];
    return conti
}

const filtroRegion =(array, filtro) =>{

let filtered = array.filter(elemen => elemen.region == filtro)
return filtered
}

const filterByName = (arr,filtro) =>{
let filtered = arr.filter (elem => elem.name.common.includes === filtro)
  return filtered
}

export default {
    getData,
    filtroRegion,
    continentes,
    filterByName,
}