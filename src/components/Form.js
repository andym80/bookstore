function Form() {
  <div className="formtitle">
    <h2 className="newbook">Add new book</h2>
  </div>;
  return (
    <form className="form">
      <input type="text" className="inputbook" placeholder="Book" />
      <input type="text" className="inputauthor" placeholder="Author" />
      <button type="submit" className="submit">Submit</button>

    </form>
  );
}

export default Form;
