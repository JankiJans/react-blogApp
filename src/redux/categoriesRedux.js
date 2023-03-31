export const getCategories = (state) => state.categories;

const categoryReducer = (statePart = [], action) => {
  switch (action.type) {
    case 'ADD_CATEGORY':
      return [...statePart, action.payload];
    default: 
    return statePart;
  }
};

export default categoryReducer;
