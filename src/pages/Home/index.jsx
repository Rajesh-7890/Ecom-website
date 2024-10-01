import { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Button } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import './home.css';

const HomePage = ({ onAddToCart, cart }) => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products: ', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="homepage">
      <div className="products-container">
        {products.map(product => {
          const isInCart = cart.some(
            cartProduct => cartProduct.id === product.id
          );

          return (
            <Card
              key={product.id}
              className="product-card"
              cover={
                <img
                  alt={product.name}
                  src={product.image}
                  className="product-image"
                />
              }
            >
              <h2>RS: {product.price} /-</h2>
              <h3>{product.title}</h3>
              <p>{product.description}</p>

              <Button
                type="primary"
                icon={<ShoppingCartOutlined />}
                className={isInCart ? 'added-to-cart' : 'add-to-cart'}
                onClick={() => onAddToCart(product)}
              >
                {isInCart ? 'Add More' : 'Add to Cart'}
              </Button>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
