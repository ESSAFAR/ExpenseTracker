import { FormEvent, useState } from "react";

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



  const handleSubmit = (event: FormEvent<HTMLFormElement>, addProduct : (product : Product) => void) =>{
    event.preventDefault();
    product.productName!==""&&product.category!==""&&product.amount!==0?
    addProduct(product):alert("Enter valid information about expense");
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
            onChange={()=>setProduct({...product, productName : event.target.value})}
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
            onChange={()=>setProduct({...product, amount : event.target.value})}
            value={product.amount}

          ></input>
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="category" className="col-sm-2 col-form-label">
          category :
        </label>
      </div>

      <select className="form-select" aria-label=".form-select-lg example " onChange={()=>setProduct({...product, category : event.target.value!==""&&event.target.value})} value={product.category}
>
        <option selected>Category</option>
        <option value="1">Groceries</option>
        <option value="2">Utilities</option>
        <option value="3">Entertainment</option>
        
      </select>
      <button type="submit" className="btn btn-primary submit" >
        Submit
      </button>
    </form>
  );
};

export default Form;
