import axios from 'axios';
var url = "http://localhost:33029/api/"
function findAll(){
    return axios
    .get(url+"Produits")
    .then((response) => response.data)
}
function deleteProduit(id){
  return axios
    .delete(url+"Produits/"+ id)
    .then((response) => response.data)
}
function addProduit(Produit){
    return axios
    .post(url+"Produits", Produit)
    .then((response) => response.data)
}
function updateProduit(id,Produit){
    return axios
    .post(url+"Produits/"+id, Produit)
    .then((response) => response.data)
}

export {
    findAll,
    addProduit,
    deleteProduit,
    updateProduit
}