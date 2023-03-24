import { useParams } from 'react-router';
import { getPostsById } from '../../../redux/postsRedux';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { Card, Row, Button, Col } from 'react-bootstrap';
import SiteTitles from '../../SiteTitles/SiteTitles';

const Post = () => {
  const { postId } = useParams();

  const renderPostById = useSelector((state) => getPostsById(state, postId));
  console.log(renderPostById);

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
                <Button variant="outline-info" href={`/post/edit/` + renderPostById.id} className="mx-2">Read More</Button>
                <Button variant="outline-danger" href="#">Delete</Button>
              </div>
            </div>
            <Card.Subtitle className="mb-2 text-muted">{renderPostById.publishedDate}</Card.Subtitle>
            <Card.Text className="pt-2 mb-0">
              <strong>Author:</strong> {renderPostById.author}</Card.Text>
            <Card.Text><strong>Description:</strong> {renderPostById.content}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Post;

{/* <Button variant="warning" href={`/post/edit/` + renderPostById.id}>Read More</Button> */}
