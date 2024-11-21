// import React from "react";
import styles from "./ShowFullItem.module.css";
/* eslint-disable react/prop-types */

const ShowFullItem = ({ item, onClose }) => {
  
  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose(); 
    }
  };

  return (
    <div className={styles.modal} onClick={handleOverlayClick}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()} >
        <button className={styles.closeButton} onClick={onClose}>
          ✖
        </button>
        <img src={item.imageUrl} alt={item.name}/>
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <p>{item.price} ₽</p>
       
      </div>
    </div>
  );
};

export default ShowFullItem;
