import { addPost } from '../../redux/postsRedux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PostForm from './PostForm';
import shortid from 'shortid';

const AddPostForm = () => {
  const dispach = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = post => {
    dispach(addPost( {id: shortid(), ...post}));
    navigate('/');
  };

  return (
    <PostForm action={handleSubmit} actionText="Add Post" />
  );
}

export default AddPostForm;
