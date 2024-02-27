import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import List from './pages/List/List';
import Edit from './pages/Edit';
import Paper from './pages/Paper';
import Message from './pages/Message';
import NavLayout from './layout/NavLayout';
import { Post } from './pages/Post';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavLayout />}>
          <Route index element={<Main />} />
          <Route path="/list" element={<List />} />
          <Route path="/post" element={<Post />} />
          <Route path="/post/:id" element={<Paper />} />
          <Route path="/post/:id/edit" element={<Edit />} />
          <Route path="/post/:id/message" element={<Message />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
