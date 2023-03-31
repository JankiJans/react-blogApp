import { useParams } from 'react-router';
import { getPostsById } from '../../../redux/postsRedux';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { Card, Row, Button, Col, Modal } from 'react-bootstrap';
import SiteTitles from '../../SiteTitles/SiteTitles';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeCard } from '../../../redux/postsRedux';


const Post = () => {
  const { postId } = useParams();

  const renderPostById = useSelector((state) => getPostsById(state, postId));
  console.log(renderPostById);

  //Modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Remove Function
  const dispatch = useDispatch();
  
  const handleRemove = (e) => {
    e.preventDefault();
    dispatch(removeCard(postId));
  };

  if (!renderPostById) return <Navigate to="/" />;
  return (
    <Row className="justify-content-center">
      <SiteTitles>Post</SiteTitles>
      <Col xs={6} md={6} lg={6} key={renderPostById.id} className="my-3">
        <Card>
          <Card.Body>
            <div className="d-flex justify-content-between"> 
              <Card.Title>{renderPostById.title}</Card.Title>
              <div>
                <Button variant="outline-info" href={`/post/edit/` + renderPostById.id} className="mx-2">Edit</Button>
                <Button variant="outline-danger" onClick={handleShow}>Delete</Button>
              </div>
            </div>
            <Card.Subtitle className="mb-2 text-muted">{renderPostById.publishedDate}</Card.Subtitle>
            <Card.Text className="pt-2 mb-0"><strong>Author:</strong> {renderPostById.author}</Card.Text>
            <Card.Text><strong>Category:</strong> {renderPostById.category}</Card.Text>         
            <Card.Text><strong>Description:</strong> {renderPostById.content}</Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>This operation will completly remove post.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="danger" onClick={handleRemove}>Delete</Button>
        </Modal.Footer>
      </Modal>
    </Row>

    
  );
};

export default Post;
