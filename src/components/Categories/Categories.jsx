/* eslint-disable react/prop-types */
import styles from "./Categories.module.css";
const Categories = ({ chooseCategory }) => {
  const categories = [
    {
      key: "all",
      name: "All",
    },
    {
      key: "chairs",
      name: "Chairs",
    },
    {
      key: "tables",
      name: "Tables",
    },
    {
      key: "Sofa",
      name: "Sofa",
    },
    {
      key: "light",
      name: "Lights",
    },
  ];
//   console.log(activeCategory);
  return (
    <div className={styles.categories}>
      {categories.map((el) => (
        <div key={el.key} onClick={() => chooseCategory(el.key)}>
          {el.name}
        </div>
      ))}
    </div>
  );
};

export default Categories;
