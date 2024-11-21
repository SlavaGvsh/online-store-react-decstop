/* eslint-disable react/prop-types */
import Item from "../item/Item.jsx";
import styles from "./Items.module.css";

const Items = ({ addToCart, filteredItems, setShowFullItem }) => {
  if (!Array.isArray(filteredItems)) {
    console.error("filteredItems is not an array:", filteredItems);
    return <p>No items to display</p>;
  }

  console.log("filteredItems in Items:", filteredItems);
  return (
    <main>
      <ul className={styles.productList}>
        {filteredItems.map((product) => (
          <Item
            key={product.id}
            addToCart={addToCart}
            product={product}
            setShowFullItem={setShowFullItem}

            //  imageUrl={product.imageUrl}
            //  name={product.name}
            //  category={product.category}
            //  description={product.description}
            //  price={product.price}
            //  dimensionsWidth={product.dimensions.width}
            //  dimensionsHeight={product.dimensions.height}
            //  dimensionsDepth={product.dimensions.depth}
            //  materials={product.materials}
            //  colorOptions={product.colorOptions}
          />
        ))}
      </ul>
    </main>
  );
};

export default Items;
