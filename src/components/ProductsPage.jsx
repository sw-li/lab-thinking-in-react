import { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [filterInstock, setFilterInstock] = useState(false);
  const [searchWord, setSearchWord] = useState('');


  const resetKeyword = (keyword)=>{
    setSearchWord(keyword)
    resetProducts()
  }

  const showInStock = (checkboxStatus)=>{
    setFilterInstock(checkboxStatus)
    resetProducts()
  }

  const resetProducts = ()=>{
    const productsCopy = [...jsonData]
    let filteredProducts = productsCopy.filter(product =>
      product.name.toLowerCase().includes(searchWord.toLowerCase()) 
      ) 
    console.log(filteredProducts)
    if(!filterInstock){
      filteredProducts = filteredProducts.filter(product=> product.inStock)
    }
    console.log(filterInstock)
    setProducts(filteredProducts)
  }


  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar
        containKeyword={resetKeyword}
        showInStock={showInStock}
      ></SearchBar>
      <ProductTable filteredProducts={products}></ProductTable>
    </div>
  );
}

export default ProductsPage;
