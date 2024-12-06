

import { useParams } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import Product from '../../types/Products';
import styles from './productdetails.module.css'; 

type ProductDetailsPageProps = {
  products: Product[];
};

const ProductDetailsPage: React.FC<ProductDetailsPageProps> = ({ products }) => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((item) => item.id === id);

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <>
      <Header />
      <div className={styles['product-details']}>
        <h1>{product.name}</h1>
        <img
          src={product.imageUrl}
          alt={product.name}
          className={styles['product-image']}
        />
        <p className={styles.category}>Category: {product.category}</p>
        <p className={styles.description}>Description: {product.description}</p>
        <p className={styles.price}>Price: ${product.price}</p>
        <p className={styles.stock}>Stock: {product.stock}</p>
      </div>
    </>
  );
};

export default ProductDetailsPage;

