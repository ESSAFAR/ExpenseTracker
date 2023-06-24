import { useState } from "react";
import Form from "./Components/Form";
import Table from "./Components/Table";
import "./index.css";

function App() {
  let [isDark, setDarkness] = useState(false);

  let [productList, setproductList] = useState([
    {
      productName: "Apple",
      amount: 2,
      category: "Groceries",
    },
    {
      productName: "TV",
      amount: 1,
      category: "Utilities",
    },
    {
      productName: "Movie Ticket",
      amount: 2,
      category: "Entertainment",
    },
  ]);

  return (
    <div className={isDark ? "dark " + "main fw-semibold" : "main fw-semibold"}>
      <div className="form-check form-switch">
        <input
          onChange={() => setDarkness(!isDark)}
          className="form-check-input"
          type="checkbox"
          id="flexSwitchCheckDefault"
        ></input>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
          Dark mode{" "}
        </label>
      </div>
      <h1 className="text-center text-primary">Expense Tracker</h1>
      <Form />
      <Table productList={productList} />
    </div>
  );
}

export default App;
