import { useState } from "react";
import { products } from "./components/ListCard/ListCard.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Items from "./components/Items/Items.jsx";
import ShowFullItem from "./components/ShowFullItem/ShowFullItem.jsx";
import Categories from "./components/Categories/Categories.jsx";
import "./App.css";



function App() {
  const [cartItems, setCartItems] = useState([]);
  const [categories, setCategories] = useState("all");
  const [filteredItems, setFilteredItems] = useState(products);
  const [showFullItem, setShowFullItem] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  console.log(products);

  // Add to cart function
  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };
  // Category selection function
  const chooseCategory = (categoryKey) => {
    setCategories(categoryKey); // Save the selected category
    if (categoryKey === "all") {
      setFilteredItems(products); // If "All", show all products
    } else {
      setFilteredItems(
        products.filter((item) => item.category === categoryKey)
      ); // Filtering products
    }
    console.log("Выбрана категория:", categoryKey);
  };

  // Function of opening full information about the product
  const handleShowFullItem = (item) => {
    console.log("Full item:", item);
    setCurrentItem(item);
    setShowFullItem(true);
  };
  //Function of closing full information about the product
  const handleCloseFullItem = () => {
    setShowFullItem(false);
    setCurrentItem(null);
  };

  return (
    <div className="wrapper">
      <Header cartItems={cartItems} setCartItems={setCartItems} />
      <Categories chooseCategory={chooseCategory} activeCategory={categories} />
      <Items
        addToCart={addToCart}
        filteredItems={filteredItems}
        setShowFullItem={handleShowFullItem}
      />
      {showFullItem && (
        <ShowFullItem item={currentItem} onClose={handleCloseFullItem} />
      )}
      <Footer />
    </div>
  );
}

export default App;
