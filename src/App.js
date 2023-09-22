import './App.css';
import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import Listpage from './pages/Listpage';
import ListDetail from './pages/ListDetail';
import Navbar from './component/Navbar'
import ListFantasy from './pages/ListFantasy';
import ListReasoning from './pages/ListReasoning';
import ListSf from './pages/ListSf';

function App() {
  return (
    <Container>
      <Navbar />
      <Routes>
        <Route path='/' element={<Listpage />} />
        <Route path='/product/:id' element={<ListDetail />} />
        <Route path='/fantasy' element={<ListFantasy />} />
        <Route path='/reasoning' element={<ListReasoning />} />
        <Route path='/sf' element={<ListSf />} />
      </Routes>
    </Container>
  );
}

export default App;
