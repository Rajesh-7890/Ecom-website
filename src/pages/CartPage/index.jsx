import React from 'react';
import { Card } from 'antd';
import './cart.css';

const Cart = ({ cart }) => {
  if (!cart || cart.length === 0) {
    return <p className="p">Your cart is empty.</p>;
  }

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <div className="products-container">
        {cart.map((product, index) => (
          <Card
            key={index}
            className="product-card"
            cover={
              <img
                alt={product.title}
                src={product.image}
                className="product-image"
              />
            }
          >
            <h2>RS: {product.price} /-</h2>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Cart;
