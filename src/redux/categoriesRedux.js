export const getCategories = (state) => state.categories;
export const postsByCategory = (state, category) => state.posts.filter((post) => post.category === category);

const categoryReducer = (statePart = [], action) => {
  switch (action.type) {
    case 'ADD_CATEGORY':
      return [...statePart, action.payload];
    default: 
    return statePart;
  }
};

export default categoryReducer;
