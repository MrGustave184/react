// import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom";
import Pet from "./Pet";
/**
 * JSX is parsed by React.createElement
 **/
// const App = () => {
//   // Giving a string to React.createElement
//   return React.createElement(
//     "div",
//     {}, // Attributes: optional
//     [
//       // Children: optional
//       React.createElement("h1", {}, "Adopt Me!"),
//       React.createElement(Pet, {
//         name: "Luna",
//         animal: "Dog",
//         breed: "Havenese",
//       }),
//       React.createElement(Pet, {
//         name: "Cub",
//         animal: "Owlbear",
//         breed: "Brown",
//       }),
//       React.createElement(Pet, {
//         name: "4",
//         animal: "5",
//         breed: "6",
//       }),
//     ],
//   );
// };

const App = () => {
  <div>
    <h1>Adopt Me!</h1>
    <Pet name="luna" animal="dog" breed="Havenese" />
    <Pet name="Cub" animal="Owlbear" breed="Brown" />
  </div>;
};

const container = document.getElementById("root");
const root = createRoot(container);

// Giving a component to React.createElement
root.render(<App />);
