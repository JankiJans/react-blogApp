import { useState } from 'react';
import { ListGroup, Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getCategories } from '../../../redux/categoriesRedux';
import { useParams } from 'react-router-dom';
import { postsByCategory } from '../../../redux/categoriesRedux';
import PostList from '../../Features/PostList';

const CategoryPage = () => {
  const { category } = useParams();
  const [selectedCategory, setSelectedCategory] = useState(category);
  const categories = useSelector(getCategories);
  const posts = useSelector((state) => postsByCategory(state, selectedCategory));

  const handleCategoryClick = (categoryItem) => {
    setSelectedCategory(categoryItem);
  };

  return (
    <div>
      <h1>Categories</h1>
      <Row>
        <Col xs={6} md={6} lg={6}>
          <ListGroup>
            {categories.map((categoryItem) => (
              <ListGroup.Item key={categoryItem}>
                <a href="#" onClick={() => handleCategoryClick(categoryItem)}>
                  {categoryItem}
                </a>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col xs={6} md={6} lg={6}>
          <h2>Selected Category: {selectedCategory}</h2>
          <ul>
            {posts.map((post) => (
              <PostList title={post.title} author={post.author} publishedDate={post.publishedDate} content={post.content} category={post.category}></PostList>
            ))}
          </ul>
        </Col>
      </Row>
    </div>
  );
};

export default CategoryPage;
