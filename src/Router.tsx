import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeView from './pages/HomeView';
import DetailView from './pages/DetailView';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/detail" element={<DetailView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
