import { Link } from 'react-router-dom';
import './ProductPage.css';
import { useCart } from '../Components/Cart/Cart';
import Header from '../Components/Header/Header';

const ProductPage = ({ products }) => {
  const { addToCart } = useCart();

  return (
    <>
    <Header />
      <div>ProductPage</div>
      <h4>"Welcome to our Christmas Shop! Discover a festive collection of holiday decorations, gifts, and treats to make your season magical. From sparkling lights to cozy mugs and everything in between, we have everything you need to celebrate the holidays in style."</h4>
      <div className="product-div">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            {/* Gör korten klickbara med Link */}
            <Link to={`/products/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <img 
                src={product.imageUrl} 
                alt={product.name} 
                style={{ width: "150px", height: "150px" }} 
              />
              <h3>{product.name}</h3>
              <p>Price: ${product.price}</p>
            </Link>
              <button onClick={() => addToCart(product)}>Add to Cart</button>

          </div>
        ))}
      </div>
    </>
  );
};

export default ProductPage;
