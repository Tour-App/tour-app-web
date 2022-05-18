import './App.css';
import { Route, Routes } from 'react-router-dom';

import Login from './pages/login.container';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<div>Main</div>} />
        <Route path="admin" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
