function Book() {
  return (
    <div className="container">
      <div className="infocard">
        <span>Action</span>
        <h1>The hunger games</h1>
        <p>Suzanne Collins</p>
        <ul>
          <li>Comments |</li>
          <li>Remove |</li>
          <li>Edit</li>
        </ul>
      </div>
      <div className="porcentage">
        <h4>60%</h4>
      </div>
      <div className="feature">
        <h4>Current Charapter</h4>
        <h4>Chapter 17</h4>
        <button type="button" className="update">UPDATE PROGRESS</button>
      </div>

      <div className="infocard">
        <span>Science Fiction</span>
        <h1>Dune</h1>
        <p>Frank Herbert</p>
        <ul>
          <li>Comments |</li>
          <li>Remove |</li>
          <li>Edit</li>
        </ul>
      </div>
      <div className="porcentage">
        <h4>8%</h4>
      </div>
      <div className="feature">
        <h4>Current Charapter</h4>
        <h4>Chapter 3: A lesson learned</h4>
        <button type="button" className="update">UPDATE PROGRESS</button>
      </div>

      <div className="infocard">
        <span>Economy</span>
        <h1>Capital in the Twenty-first Century</h1>
        <p>Suzanne Collins</p>
        <ul>
          <li>Comments |</li>
          <li>Remove |</li>
          <li>Edit</li>
        </ul>
      </div>
      <div className="porcentage">
        <h4>0%</h4>
      </div>
      <div className="feature">
        <h4>Current Charapter</h4>
        <h4>Introduction</h4>
        <button type="button" className="update">UPDATE PROGRESS</button>
      </div>
    </div>
  );
}

export default Book;
