import { useState, FormEvent, useEffect } from "react";
import { AiFillDelete } from "react-icons/ai";

interface Product {
  productName: String;
  amount: number;
  category: string;
}

interface TableProps {
  productList: Product[];
  onDelete : (product : Product)=>void;
}


const categories = ["Groceries", "Utilities", "Entertainment"]

const Table = ({ productList , onDelete}: TableProps) => {
  const [displayedProductlist, setDisplayedProductlist] = useState(productList);

  useEffect(() => {
    setDisplayedProductlist(productList);
  }, [productList]);




  return (
    <>
      <div className="filterList">
        <select 
        onChange={(event)=>setDisplayedProductlist(productList.filter((product)=>event.target.value ==="0" || product.category=== categories[parseInt(event.target.value)-1]))}
          className="form-select form-select-lg mb-3"
          aria-label=".form-select-lg example"
        >
          <option selected value="0">Category</option>
          <option value="1">Groceries</option>
          <option value="2">Utilities</option>
          <option value="3">Entertainment</option>
        </select>
      </div>
      <div>
      <h3 className="text-center">{displayedProductlist.length === 0 && "No item found 🙂"}</h3>
      {displayedProductlist.length !== 0 &&
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
                <td>{categories[parseInt(product.category)-1]}</td>
                <td>
                  <button type="button" className="btn btn-outline-danger" onClick={()=>onDelete(product)}>
                    <AiFillDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
}
      </div>
      
    </>
  );
  
};

export default Table;
