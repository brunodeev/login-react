import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Layout';
import Home from './Home';
import OtherPage from './OtherPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path='/other' element={<OtherPage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}