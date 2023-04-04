import { Card, Row, Button, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { postsByCategory } from '../../redux/categoriesRedux';

  const CategoryPostList = ({ category }) => {
  const posts = useSelector((state) => postsByCategory(state, category));

  return (
    <Row>
      {posts.map((post) => (
        <Col key={post.id} className="my-3">
          <Card style={{ height: '100%'}}>
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{post.publishedDate}</Card.Subtitle>
              <Card.Text className='pt-2 mb-0'><strong>Author:</strong> {post.author}</Card.Text>
              <Card.Text><strong>Category:</strong>{post.category}</Card.Text>
              <Card.Text><strong>Description:</strong> <span dangerouslySetInnerHTML={{ __html: post.content }}></span></Card.Text>
              <Button variant="warning" href={`/post/${post.id}`}>Read More</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  )
};

export default CategoryPostList;
