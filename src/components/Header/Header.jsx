/* eslint-disable react/prop-types */
import { FaCartPlus, FaTimes } from "react-icons/fa";
import { useState } from "react";
import Order from "./../../components/Order/Order.jsx";
import styles from "./Header.module.css";

const showOrder = (cartItems, removeItem) => {
  let summa = 0;

//   console.log(cartItems);
  cartItems.forEach((value) => {
    //  summa += Number.parseFloat(value.price);
    const parsePrice = (price) => Number.parseFloat(price);
    summa += parsePrice(value.price);
  });

  return (
    <>
      <ul className={styles.shop_cart_list}>
        {cartItems.map((item, index) => (
          <Order
            key={item.index}
            item={item}
            index={index}
            removeItem={removeItem}
          />
        ))}
      </ul>
      <p className={styles.summa}>
      Sum: {new Intl.NumberFormat().format(summa)} $
      </p>
    </>
  );
};
const showNothsing = () => {
  return <p>Cart is empty</p>;
};

const Header = ({ cartItems, setCartItems }) => {
//   console.log(cartItems);

  let [cartOpen, setCartOpen] = useState(false);

  const removeItem = (index) => {
    const updatedCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCartItems); // Updating the cart status
  };
  const closeCart = () => {
    setCartOpen(false);
  };
  return (
    <header>
      <div>
        <span className={styles.logo}>House Staff</span>
        <ul className={styles.nav}>
          <li>About us</li>
          <li>Contacts</li>
          <li>Cabinet</li>
        </ul>
        <FaCartPlus
          onClick={() => setCartOpen((cartOpen = !cartOpen))}
          className={`${styles.shop_add} ${cartOpen ? styles.active : ""}`}
        />

        {/* {cartOpen && <div className={styles.shop_cart}></div>} */}
        {cartOpen && (
          <div className={styles.shop_cart}>
            <button onClick={closeCart} className={styles.close_cart}>
              <FaTimes /> {/* Close Cart Button */}
            </button>
            {cartItems.length > 0
              ? showOrder(cartItems, removeItem)
              : showNothsing()}
          </div>
        )}
      </div>
      <div className={styles.presentation}></div>
    </header>
  );
};

export default Header;
