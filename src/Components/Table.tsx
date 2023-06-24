import { useState } from "react";

interface Product {
  productName: String;
  amount: number;
  category: string;
}

interface TableProps {
  productList: Product[];
}

const Table = ({ productList }: TableProps) => {
  let [displayedProductlist, setDisplayedProductlist] = useState(productList);
  return (
    <>
      <div className="filterList">
        <select
          className="form-select form-select-lg mb-3"
          aria-label=".form-select-lg example"
        >
          <option selected>Category</option>
          <option value="1">Groceries</option>
          <option value="2">Utilities</option>
          <option value="3">Entertainment</option>
        </select>
      </div>
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Description</th>
              <th scope="col">Amount</th>
              <th scope="col">Category</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {displayedProductlist.map((product) => (
              <tr key={5}>
                <th scope="row">{product.productName}</th>
                <td>{product.amount}</td>
                <td>{product.category}</td>
                <td>
                  <button type="button" className="btn btn-outline-danger">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
