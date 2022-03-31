import React from "react";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Post from "./components/Post";
import Ticket from './components/Ticket';


 

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Post/>} />
        <Route path="/ticket" element={<Ticket/>} />
      </Routes>
    </Router>
  )
}

export default App;
