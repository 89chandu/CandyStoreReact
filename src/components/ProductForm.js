import React, { useState } from 'react';
import classes from './ProductForm.module.css';
import { useCart } from './CartContext';

const ProductForm = ({ onAddProduct }) => {
  const { addToCart } = useCart();
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productColor, setProductColor] = useState('');
  const [productSize, setProductSize] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();
    const newProduct = {
      name: productName,
      price: productPrice,
      color: productColor,
      size: productSize,
    };
    onAddProduct(newProduct);
    
    // Add the newly added product to the cart as well
    addToCart(newProduct);

    // Clear form fields
    setProductName('');
    setProductPrice('');
    setProductColor('');
    setProductSize('');
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Candy Name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={productPrice}
        onChange={(e) => setProductPrice(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={productColor}
        onChange={(e) => setProductColor(e.target.value)}
        required
      />
      {/* <input
        type="text"
        placeholder="Size"
        value={productSize}
        onChange={(e) => setProductSize(e.target.value)}
        required
      /> */}
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;
