import { useState } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useForm } from 'react-hook-form';

const PostForm = ({ action, actionText, ...props }) => { //średnio rozumiem 
  const [title, setTitle] = useState(props.title || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
  const [author, setAuthor] = useState(props.author || '');
  const [content, setContent] = useState(props.content || '');

  const { register, handleSubmit: validate, formState: { errors } } = useForm();

  const handleSubmit = (e) => {
    action({ title, author, publishedDate, content});
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
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label><strong>Content</strong></Form.Label>
            <ReactQuill {...register("content", { required: true, maxLength: 20})} theme="snow"  placeholder='Write something here ...' value={content} onChange={setContent} style={{ height: '150px' }}></ReactQuill>
              {/* <Form.Control as="textarea" value={content} onChange={(e) => setContent(e.target.value)} rows={5} placeholder="Write something here ..." /> */}   
              {errors.content && <small className="mt-5 d-block form-text text-danger">This field is required with at least 3 characters and max 20</small>}
          </Form.Group>
          <Button variant="info" type="submit" className="mt-5">Add Post</Button>
        </Form>
      </Col>
    </div>
  );
};
export default PostForm;
