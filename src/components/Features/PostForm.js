import { useEffect, useState } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useForm } from 'react-hook-form';
import styles from './PostForm.style.scss';
import {getCategories} from '../../redux/categoriesRedux';
import {useSelector} from 'react-redux';

const PostForm = ({ action, actionText, ...props }) => { //średnio rozumiem 
  const [title, setTitle] = useState(props.title || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
  const [author, setAuthor] = useState(props.author || '');
  const [content, setContent] = useState(props.content || '');

  const Allcategories = useSelector(getCategories)
  
  const [category, setCategory] = useState(props.category || '');

  const { register, handleSubmit: validate, formState: { errors }, setValue } = useForm();

  useEffect (() => {
    register('content', { required: true, minLength: 10});
  }, [register]);

  const handleContentChange = (editorState) => {
    setValue("content", editorState);
    setContent(editorState);
  };



  const handleSubmit = () => {
    action({ title, author, publishedDate, content, category});
  };

  return (
    <div className="d-flex justify-content-center mt-5">
      <Col xs={6} md={6} lg={6}>
        <Form onSubmit={validate(handleSubmit)}>
          <Form.Group className="mb-3" controlId="postInformations">
            <Form.Label><strong>Title</strong></Form.Label>
            <Form.Control  {...register("title", { required: true, minLength: 3})} type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter title" style={{ width: '70%' }} />
            {errors.title && <small className="d-block form-text text-danger">This field is required with at least 3 characters</small>}
            <Form.Label className="pt-3"><strong>Date</strong></Form.Label>
            <Form.Control  {...register("date", { required: true, minLength: 3})} type="date" value={publishedDate} onChange={(e) => setPublishedDate(e.target.value)} placeholder="Enter date" style={{ width: '70%' }} />
            {errors.date && <small className="d-block form-text text-danger">This field is required</small>}
            <Form.Label className="pt-3"><strong>Name</strong></Form.Label>
            <Form.Control {...register("author", { required: true, minLength: 3})} type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Enter name" style={{ width: '70%' }} />
            {errors.author && <small className="d-block form-text text-danger">This field is required with at least 3 characters</small>}
            <Form.Label className="pt-3"><strong>Category</strong></Form.Label>
            <Form.Select aria-label="select" value={category} {...register("category", { required: true})}  onChange={(e) => setCategory(e.target.value)} style={{ width: '70%' }}>
              {Allcategories.map((category) => {
                return (
                  <option key={category} value={category}>{category}</option>
                );
              })}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label><strong>Content</strong></Form.Label>
            <ReactQuill className={styles.quill}theme="snow" placeholder='Write something here ...' value={content} onChange={handleContentChange}></ReactQuill> 
            {errors.content && <small className="d-block form-text text-danger">This field is required with at least 3 characters and max 20</small>}
          </Form.Group>
          <Button variant="info" type="submit"className="mt-2">Add Post</Button>
        </Form>
      </Col>
    </div>
  );
};

export default PostForm;
