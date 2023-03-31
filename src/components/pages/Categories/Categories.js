import {ListGroup, Col} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getCategories } from '../../../redux/categoriesRedux';

const CategoryPage = () => {

    const categories = useSelector(getCategories);

  return (
    <div>
        <h1>Categories</h1>
        <ListGroup>
            <Col xs={12} md={6} lg={4}>
                <ListGroup>
                    {categories.map((category) => (
                        <ListGroup.Item key={category}><a href={'/categories/' + category}>{category}</a></ListGroup.Item>
                    ))}
                </ListGroup>
            </Col>
        </ListGroup>
    </div>
  );
};

export default CategoryPage;
