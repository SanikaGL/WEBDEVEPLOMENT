import logo from './logo.svg';

import './App.css';
import LoginPage from './first/LoginPage';
import react from "react";
import {browser as Router ,Routes,Route}from'react-router-dom';
function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} ></Route>
        </Routes>
      </Router>
  );
}

export default App;
