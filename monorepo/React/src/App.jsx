import React, { useState } from "react";
import pabauLogo from "./assets/pabaulogo.svg";
import imageItem from "./assets/ImageItem.svg";
import "./App.css";

const App = () => {
  const [isSelected, setIsSelected] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);

  const items = [
    {
      id: 1,
      name: "Anti Wrinkle Treatment",
      description: "Description for Anti Wrinkle Treatment",
    },
    {
      id: 2,
      name: "Dermal Fillers",
      description: "Description for Dermal Fillers",
    },
    { id: 3, name: "Secret RF", description: "Description for Secret RF" },
    { id: 4, name: "HArmonyCA", description: "Description for HArmonyCA" },
    { id: 5, name: "Profhilo", description: "Description for Profhilo" },
    { id: 6, name: "Facials", description: "Description for Facials" },
    {
      id: 7,
      name: "Sclerotherapy",
      description: "Description for Sclerotherapy",
    },
    { id: 8, name: "LED", description: "Description for LED" },
  ];

  const handleSelectedItem = (item) => {
    setIsSelected(item);
    setCurrentStep(2);
  };

  const handleBackButton = () => {
    setCurrentStep(1);
  };

  return (
    <>
      <header>
        <h1>Choose Service</h1>
        <p>Step {currentStep} / 2</p>
      </header>
      {currentStep === 1 && (
        <main>
          <div className="items__list">
            <ul>
              {items.map((item) => (
                <li key={item.id} onClick={() => handleSelectedItem(item)}>
                  <img src={imageItem} alt="" />
                  <p>{item.name}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="bottom__info">
            <p>Not sure about consultation type? Please call</p>
            <span>0203 7959063</span>
          </div>
        </main>
      )}
      {currentStep === 2 && isSelected && (
        <main style={{ height: "100vh" }}>
          <div className="item__detail">
            <h2>{isSelected.name} Details</h2>
            <p>Name:</p>
            <span>{isSelected.name}</span>
            <p>Details:</p>
            <span>{isSelected.description}</span>
            <button type="button" onClick={handleBackButton}>
              Back
            </button>
          </div>
          <div className="bottom__info">
            <p>Not sure about consultation type? Please call</p>
            <span>0203 7959063</span>
          </div>
        </main>
      )}
      <footer>
        <p>Powered By</p>
        <img src={pabauLogo} alt="" />
      </footer>
    </>
  );
};

export default App;
