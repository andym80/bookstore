import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/Category/Category';

const Category = () => {
  const response = useSelector((state) => state.Categoryreducer);
  const dispatch = useDispatch();
  (
    <div className="category">
      <button type="button" onClick={() => dispatch(checkStatus())}>Check status</button>
      <p>{ response }</p>
    </div>
  );
};

export default Category;
