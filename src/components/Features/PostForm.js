import { useState } from 'react';
import { Form, Button, Col } from 'react-bootstrap';

const PostForm = ({ action, actionText, ...props }) => {//średnio rozumiem 
  const [title, setTitle] = useState(props.title || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
  const [author, setAuthor] = useState(props.author || '');
  const [content, setContent] = useState(props.content || '');


const handleSubmit = (e) => {
  e.preventDefault();
  action({ title, author, publishedDate, content });
};

  return (
    <div className="d-flex justify-content-center mt-5">
      <Col xs={6} md={6} lg={6}>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="postInformations">
            <Form.Label><strong>Title</strong></Form.Label>
            <Form.Control type="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter title" style={{ width: '70%' }} />
            <Form.Label className="pt-3"><strong>Date</strong></Form.Label>
            <Form.Control type="date" value={publishedDate} onChange={(e) => setPublishedDate(e.target.value)} placeholder="Enter date" style={{ width: '70%' }} />
            <Form.Label className="pt-3"><strong>Name</strong></Form.Label>
            <Form.Control type="name" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Enter name" style={{ width: '70%' }} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label><strong>Example textarea</strong></Form.Label>
            <Form.Control as="textarea" value={content} onChange={(e) => setContent(e.target.value)} rows={5} placeholder="Write something here ..." />
          </Form.Group>
          <Button variant="info" type="submit">Add Post</Button>
        </Form>
      </Col>
    </div>
  );
};
export default PostForm;
