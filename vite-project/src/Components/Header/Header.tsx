
import { Link } from 'react-router-dom';
import styles from './header.module.css'; 

const Header = () => {
    return (
      <div className={styles.header}>
        <Link data-testid="link" to="/">
          <img
            src="https://static.vecteezy.com/ti/gratis-vektor/p1/8629579-tomte-logo-mall-gratis-vector.jpg"
            className={styles.logo}
            alt="Home Link"
          />
        </Link>
        <div>
          <Link data-testid="link" to="/">Home</Link>
          <Link data-testid="link" to="/cart">Cart</Link>
        </div>
      </div>
    );
  };
  
  export default Header;