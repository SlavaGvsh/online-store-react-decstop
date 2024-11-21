import styles from "./Order.module.css";
import { FaTrash } from "react-icons/fa";
/* eslint-disable react/prop-types */

const Order = ({ item, index, removeItem }) => {
  return (
    <li className={styles.list_item}>
      <div>
        <span>{index + 1}.</span>
        <span>{item.name}</span>-<span>{item.price}</span>
        {/* {item.name} - ${item.price} */}
      </div>

      <span className={styles.icon_wrapper}>
        {" "}
        <FaTrash className={styles.icon} onClick={() => removeItem(index)} />
      </span>
    </li>
  );
};

export default Order;
