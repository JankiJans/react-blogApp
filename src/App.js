import { Routes, Route } from 'react-router-dom';
import  Home  from './components/pages/Home/Home';
import  About  from './components/pages/About/About';
import  ErrorPage  from './components/pages/ErrorPage/ErrorPage';
import  Post  from './components/pages/Post/Post';
import  PostEdit  from './components/pages/PostEdit/PostEdit';
import  PostAdd  from './components/pages/PostAdd/PostAdd';



const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/post/add" element={<PostAdd />} />
        <Route path="/post/edit/:id" element={<PostEdit />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};
export default App;
