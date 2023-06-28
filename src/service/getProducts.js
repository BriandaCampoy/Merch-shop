
async function getProducts(){
  const response = await fetch('https://fakestoreapi.com/products/')
  if(!response.ok){
    throw new Error('Ha ocurrido un error');
  }
  const data = await response.json();
  return data;
}

export default getProducts;