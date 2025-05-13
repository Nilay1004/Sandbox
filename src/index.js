import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200"; //this we could have used in src
ReactDOM.render(
  <div>
    <h1>My Favourite Foods</h1>
    <div>
      <img
        className="img"
        src="https://media.istockphoto.com/id/1457433817/photo/group-of-healthy-food-for-flexitarian-diet.jpg?s=612x612&w=0&k=20&c=v48RE0ZNWpMZOlSp13KdF1yFDmidorO2pZTu2Idmd3M="
      />
      <img className="image" src={img + "?grayscale"} alt="image" />
      <img
        className="img"
        src="https://media.istockphoto.com/id/1457433817/photo/group-of-healthy-food-for-flexitarian-diet.jpg?s=612x612&w=0&k=20&c=v48RE0ZNWpMZOlSp13KdF1yFDmidorO2pZTu2Idmd3M="
      />
      <img
        className="img"
        src="https://media.istockphoto.com/id/1457433817/photo/group-of-healthy-food-for-flexitarian-diet.jpg?s=612x612&w=0&k=20&c=v48RE0ZNWpMZOlSp13KdF1yFDmidorO2pZTu2Idmd3M="
      />
    </div>
  </div>,
  document.getElementById("root")
);
