import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// data we are going to use
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

// data end
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Pizza(props) {
  // if (props.pizzaObj.soldOut) return null;
  return (
    <li className={`pizza ${props.pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name}></img>
      <div>
        <h3> {props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.soldOut ? "SOLDOUT" : props.pizzaObj.price}</span>
      </div>
    </li>
  );
}
function Header() {
  return (
    <header className="header">
      <h1>Fast Restaurent and Co.</h1>
    </header>
  );
}
function Menu() {
  const pizzas = pizzaData;

  const NumPizzas = pizzas.length;
  return (
    <menu className="menu">
      <h2> Our Menu</h2>
      {NumPizzas > 0 ? (
        <>
          <p>
            {" "}
            An Authentic Italian Restaurent. 6 innovative dishes everyday. All
            from oven directly
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p> we 're still working on our menu. Please come back later :)</p>
      )}
    </menu>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour < closeHour;
  console.log(isOpen);
  console.log(hour);
  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>we are open until {closeHour}:00 come visit us or order online</p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <p>
          {" "}
          we 're happy to welcome you between {openHour}:00 and {closeHour}:00
        </p>
      )}
    </footer>
  );
}
// React v18

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
