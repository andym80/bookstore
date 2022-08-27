import PropTypes from 'prop-types';

const Book = (props) => {
  const { title, author } = props;

    <div className="container">
      <div className="infocard">
        <span>Action</span>
        <h1>{title}</h1>
        <p>{author}</p>
        <div className="buttons">
          <button className="button" type="button">Comment |</button>
          <button className="button" type="button">Delete |</button>
          <button className="button" type="button">Edit</button>
        </div>
      </div>
      <div className="percentage">
        <h4>60%</h4>
      </div>
      <div className="feature">
        <h4>Current Charapter</h4>
        <h4>Chapter 17</h4>
        <button type="button" className="update">UPDATE PROGRESS</button>
      </div>
    </div>;
};

Book.PropTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
