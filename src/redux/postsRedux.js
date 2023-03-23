//selectors
export const getPostsById = ({ posts}, postId ) => posts.find((post) => post.id === postId)
export const getAllPosts = ({ posts }) => posts;
//actions
const createActionName = actionName => `app/posts/${actionName}`;
const GENERATE_POSTS = createActionName('GENERATE_POSTS');

//action creators
export const generatePosts = payload => ({ type: GENERATE_POSTS, payload,});
const postsRecuder = (statePart = [], action) => {
  switch (action.type) {
    case GENERATE_POSTS:
      return [...statePart, ...action.payload];
    default:
      return statePart;
  }
};

export default postsRecuder;
