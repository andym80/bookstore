const CHECK_STATUS = 'bookstore-react-app/Category/CHECK_STATUS';

const CategoryReducer = (state = [], action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return action.text;
    default:
      return state;
  }
};

export const checkStatus = (text) => {
  const status = {
    type: CHECK_STATUS,
    text,
  };
  return status;
};
export default CategoryReducer;
