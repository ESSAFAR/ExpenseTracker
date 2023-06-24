const Form = () => {
  return (
    <form>
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
          ></input>
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="category" className="col-sm-2 col-form-label">
          category :
        </label>
      </div>

      <select className="form-select" aria-label=".form-select-lg example ">
        <option selected>Category</option>
        <option value="1">Groceries</option>
        <option value="2">Utilities</option>
        <option value="3">Entertainment</option>
      </select>
      <button type="submit" className="btn btn-primary submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
