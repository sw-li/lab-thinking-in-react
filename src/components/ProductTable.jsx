import ProductRow from './ProductRow';

function ProductTable(props) {
  const { filteredProducts } = props;
  const rows = filteredProducts.map((product) => (
    <ProductRow product={product}></ProductRow>
  ));
  return (
    <div className="productTable">
      <h1>ProductTable</h1>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}

export default ProductTable;
