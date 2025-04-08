import React, { useState } from 'react';
import axios from 'axios';

function AddProduct() {
  const [productPlan, setProductPlan] = useState('');
  const [price, setPrice] = useState('');

  const handleProduct = async (e) => {
    e.preventDefault();

    const productData = {
      plan: productPlan,
      price: parseFloat(price), 
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_Url}/api/products`,
        productData,);
      console.log('Product added:', response.data);
      setProductPlan('');
      setPrice('');
    } catch (error) {
      console.error('Failed to add product:', error);
    }
  };

  const handlePlanChange = (e) => {
    setProductPlan(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 border rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Add New Product</h2>
      <form onSubmit={handleProduct} className="space-y-4">
        <div className="space-y-2">
          <label className="block font-medium text-gray-700">Product Plan:</label>
          <div>
            <label className="inline-flex items-center mr-4">
              <input
                type="radio"
                name="productPlan"
                value="premium"
                checked={productPlan === 'premium'}
                onChange={handlePlanChange}
                className="form-radio"
                required
              />
              <span className="ml-2">Premium</span>
            </label>
            <label className="inline-flex items-center mr-4">
              <input
                type="radio"
                name="productPlan"
                value="basic"
                checked={productPlan === 'basic'}
                onChange={handlePlanChange}
                className="form-radio"
                required
              />
              <span className="ml-2">Basic</span>
            </label>
            <label className="inline-flex items-center mr-4">
              <input
                type="radio"
                name="productPlan"
                value="starter"
                checked={productPlan === 'starter'}
                onChange={handlePlanChange}
                className="form-radio"
                required
              />
              <span className="ml-2">Starter</span>
            </label>
            
          </div>
        </div>
        <input
          type="number"
          name="price"
          placeholder="Price"
          required
          className="w-full p-2 border rounded"
          value={price}
          onChange={handlePriceChange}
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddProduct;