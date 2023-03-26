import { addPost } from '../../redux/postsRedux';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import shortid from 'shortid';
import {Form, Button, Col} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AddPostForm = () => {
  const dispach = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [publishedDate, setPublishedDate] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispach(addPost({id: shortid(), title, publishedDate, author, content,}));
    navigate('/');
  };

  return (
    <div className="d-flex justify-content-center mt-5" >
        <Col xs={6} md={6} lg={6}>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="postInformations">
                    <Form.Label><strong>Title</strong></Form.Label>
                    <Form.Control type="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter title" style={{ width: '70%' }}/>
                    <Form.Label className="pt-3"><strong>Date</strong></Form.Label>
                    <Form.Control type="date" value={publishedDate} onChange={(e) => setPublishedDate(e.target.value)} placeholder="Enter date" style={{ width: '70%' }}/>
                    <Form.Label className="pt-3"><strong>Name</strong></Form.Label>
                    <Form.Control type="name" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Enter name" style={{ width: '70%' }}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label><strong>Example textarea</strong></Form.Label>
                    <Form.Control as="textarea" value={content} onChange={(e) => setContent(e.target.value)} rows={5} placeholder="Write something here ..."/>
                </Form.Group>
                <Button variant="info" type="submit">Add Post</Button>
            </Form>
        </Col>
    </div>
  );
}

export default AddPostForm;
