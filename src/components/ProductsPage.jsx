import { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [filterInstock, setFilterInstock] = useState(false);
  const [searchWord, setSearchWord] = useState('');

  const containKeyword = (keyword, showInStock = false) => {
    const productsCopy = [...jsonData];
    const filteredProducts = productsCopy.filter((product) =>
      product.name.toLowerCase().includes(keyword.toLowerCase())
    );
    setSearchWord(keyword)
    setProducts(filteredProducts);
  };
  
  const showInStock = (checkboxStatus) => {
    console.log(checkboxStatus);
    const newStatus = checkboxStatus;
    const productsCopy = [...jsonData];
    const onlyInStockProducts = productsCopy.filter(
      (product) => product.inStock
    );
    newStatus ? setProducts(onlyInStockProducts) : setProducts(productsCopy);
    setFilterInstock(newStatus);
  };
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
