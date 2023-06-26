import { useState } from "react";
import Form from "./Components/Form";
import Table from "./Components/Table";
import "./index.css";

function App() {
  const [isDark, setDarkness] = useState(false);
  const [productList, setproductList] = useState([
    {
      productName: "Apple",
      amount: 2,
      category: "1",
    },
    {
      productName: "TV",
      amount: 1,
      category: "2",
    },
    {
      productName: "Movie Ticket",
      amount: 2,
      category: "3",
    },
  ]);

  return (
    <div className={isDark ? "dark " + "main fw-semibold" : "main fw-semibold container-fluid "}>
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
      <Form addProduct = {(product)=>setproductList([...productList, product])}/>
      <Table productList={productList} onDelete={(selectedProduct)=>setproductList(productList.filter((product)=>product!==selectedProduct))}/>
    </div>
  );
}

export default App;
