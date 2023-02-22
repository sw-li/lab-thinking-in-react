import { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [filterInstock, setFilterInstock] = useState(false);
  const [searchWord, setSearchWord] = useState('');
  
  const containKeyword = (keyword)=>{
    setSearchWord(keyword)
    // watch out the delay of setState, 
    // so we should use the keywork instead the state searchWord
    searchBar(keyword,filterInstock)
  }
  const showInStock = (onlyStock)=>{
    setFilterInstock(onlyStock)
    searchBar(searchWord,onlyStock)
  }

  const searchBar = (keyword, onlyStock)=>{
    let productsCopy = [...jsonData]
    if(onlyStock){
      productsCopy = productsCopy.filter(product=>product.inStock)
    }
    productsCopy = productsCopy.filter(product=> product.name.includes(keyword))
    setProducts(productsCopy)
  }

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar
        containKeyword={containKeyword}
        showInStock={showInStock}
      ></SearchBar>
      <ProductTable filteredProducts={products}></ProductTable>
    </div>
  );
}

export default ProductsPage;
