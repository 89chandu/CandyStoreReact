import React, { useState } from 'react';
import ProductForm from './ProductForm';
import ProductItem from './ProductItem';
import { useCart } from './CartContext'; // Import the cart context
import classes from './Dashboard.module.css';

const Dashboard = () => {
  const { cartItems } = useCart(); // Get the cart items from the context

  const [products, setProducts] = useState([]);

  const addProductHandler = (product) => {
    setProducts((prevProducts) => [...prevProducts, product]);
  };

  const deleteProductHandler = (index) => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts);
  };

  const editProductHandler = (index, updatedProduct) => {
    const updatedProducts = [...products];
    updatedProducts[index] = updatedProduct;
    setProducts(updatedProducts);
  };

  const totalWorth = cartItems.reduce((total, item) => total + parseFloat(item.price), 0);

  return (
    <div className={classes.dashboard}>
      <h1>Candy Store</h1>
      <ProductForm onAddProduct={addProductHandler} />
      <div id="productList">
        {products.map((product, index) => (
          <ProductItem
            key={index}
            index={index}
            product={product}
            onDelete={deleteProductHandler}
            onEdit={editProductHandler}
          />
        ))}
      </div>
      <div>Total Worth: ${totalWorth.toFixed(2)}</div>
    </div>
  );
};

export default Dashboard;
