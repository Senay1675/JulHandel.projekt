
import { useCart } from "../../Components/Cart/Cart";
import Header from "../../Components/Header/Header";
import styles from "./cartpage.module.css";

const CartPage = () => {
  const { cart } = useCart();

  return (
    <div className={styles.cartPage}>
      <Header />
      <div className={styles.cartHeader}>
        <h1>Your Cart</h1>
      </div>
      {cart.length === 0 ? (
        <p className={styles.cartEmpty}>Your cart is empty</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className={styles.cartItem}>
            <h3>{item.name}</h3>
            <div>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CartPage;

