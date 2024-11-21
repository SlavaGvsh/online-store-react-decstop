/* eslint-disable react/prop-types */
import styles from "./Item.module.css";

// const Item = ({
//   imageUrl,
//   name,
//   category,
//   description,
//   price,
//   dimensionsWidth,
//   dimensionsHeight,
//   dimensionsDepth,
//   materials,
//   colorOptions,
// }) => {

//   return (
//     <li className={styles.product_card}>
//       <img src={imageUrl} alt={name} className={styles.product_image} />
//       <div className={styles.product_details}>
//         <h2 className={styles.product_name}>{name}</h2>
//         <p className={styles.product_category}>Category: {category}</p>
//         <p className={styles.product_description}>{description}</p>
//         <p className={styles.product_price}>${price}</p>
//         <div className={styles.product_dimensions}>
//           <p>
//             Dimensions: {dimensionsWidth} x {dimensionsHeight} x{" "}
//             {dimensionsDepth}
//           </p>
//         </div>
//         <p className={styles.product_materials}>
//           Materials: {materials.join(", ")}
//         </p>
//         <p className={styles.product_colors}>
//           Color Options: {colorOptions.join(", ")}
//         </p>
//         <button className={styles.add_to_cart_btn}>Add to Cart</button>
//       </div>
//     </li>
//   );
// };
const Item = ({ product, addToCart, setShowFullItem }) => {
  const {
    imageUrl,
    name,
    category,
    description,
    price,
    dimensions: { width, height, depth },
    materials,
    colorOptions,
  } = product;

  return (
    <li className={styles.product_card}>
      <img
        src={imageUrl}
        alt={name}
        className={styles.product_image}
        onClick={() => setShowFullItem(product)}
      />
      <div className={styles.product_details}>
        <h2 className={styles.product_name}>{name}</h2>
        <p className={styles.product_category}>Category: {category}</p>
        <p className={styles.product_description}>{description}</p>
        <p className={styles.product_price}>${price}</p>
        <div className={styles.product_dimensions}>
          <p>
            Dimensions: {width} x {height} x {depth}
          </p>
        </div>
        <p className={styles.product_materials}>
          Materials: {materials.join(", ")}
        </p>
        <p className={styles.product_colors}>
          Color Options: {colorOptions.join(", ")}
        </p>
        <button
          onClick={() => addToCart(product)}
          className={styles.add_to_cart_btn}
        >
          Add to Cart
        </button>
      </div>
    </li>
  );
};
export default Item;
