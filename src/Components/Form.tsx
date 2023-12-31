import { FormEvent, useState } from "react";
import { GoAlertFill } from "react-icons/go";



interface Product {
  productName: string;
  amount: number;
  category : string;

  
}

interface Props{
  addProduct : (product : Product)=> void;
}

const Form = ({addProduct} : Props) => {
  const [product, setProduct] = useState({
    productName : "",
    amount : 0,
    category : ""
  })

  const [isValid, setValid] = useState(true);


  
  
  const handleSubmit = (event: FormEvent<HTMLFormElement>, addProduct : (product : Product) => void) =>{
    event.preventDefault();
    if(product.productName!==""&&product.category!==""&&product.amount!==0){
      addProduct(product);
      setValid(true)
    }
    else
      setValid(false);
  }

  return (
    <form onSubmit={(event)=>handleSubmit(event, addProduct)}>
      <div className="mb-3">
        <label htmlFor="product" className="col-sm-2 col-form-label">
          Product :
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            id="product"
            className="form-control"
            placeholder="Enter your command name"
            onChange={(event)=>setProduct({...product, productName : event.target.value})}
            value={product.productName}
          ></input>
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="col-sm-2 col-form-label">
          amount :
        </label>
        <div className="col-sm-10">
          <input
            type="number"
            id="amount"
            className="form-control"
            placeholder="Enter the amount "
            onChange={(event)=>setProduct({...product, amount : parseInt(event.target.value)})}
            value={product.amount}

          ></input>
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="category" className="col-sm-2 col-form-label">
          category :
        </label>
      </div>

      <select className="form-select" aria-label=".form-select-lg example " onChange={(event)=>setProduct({...product, category : (event.target.value!=="")?event.target.value:""})} value={product.category}
>
        <option selected>Category</option>
        <option value="1">Groceries</option>
        <option value="2">Utilities</option>
        <option value="3">Entertainment</option>
        
      </select>
      <button type="submit" className="btn btn-primary submit" >
        Submit
      </button>
      <div className={isValid?"d-none":"alert alert-warning"}><GoAlertFill />  All fields must be filled with correct values</div>
    </form>
  );
};

export default Form;
