import React from "react";

const ItemDetails = ({ item, handleBackButton }) => {
  return (
    <main style={{ height: "100vh" }}>
      <div className="item__detail">
        <h2>{item.name} Details</h2>
        <p>Name:</p>
        <span>{item.name}</span>
        <p>Details:</p>
        <span>{item.description}</span>
        <button type="button" onClick={handleBackButton}>
          Back
        </button>
      </div>
      <div className="bottom__info">
        <p>Not sure about consultation type? Please call</p>
        <span>0203 7959063</span>
      </div>
    </main>
  );
};

export default ItemDetails;
