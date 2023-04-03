import { useState } from 'react';
import { ListGroup, Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getCategories } from '../../../redux/categoriesRedux';
import { useParams } from 'react-router-dom';
import CategoryPostList from '../../Features/CategoryPostList';

const CategoryPage = () => {
  const { category } = useParams();
  const [selectedCategory, setSelectedCategory] = useState(category);
  const categories = useSelector(getCategories);

  const handleCategoryClick = (categoryItem) => {
    setSelectedCategory(categoryItem);
  };

  return (
    <div>
      <header className="d-flex justify-content-between">
        <h1>Categories</h1>
        <h1>Selected Category: <span>{selectedCategory}</span></h1>
      </header>
      <Row>
        <Col className="mt-3">
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
          <div> 
            <CategoryPostList category={selectedCategory} />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default CategoryPage;
