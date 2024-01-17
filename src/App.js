// src/App.js
import React from 'react';

import Navbar from './Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Functions from './Functions/Functions';
import Faq from './Navbar/Faq/Faq';
import Home from './Home/Home';
import Flashcard from './Flashcard/Flashcard';
import Notfound from './404/NotFound';




function App() {
  return (
   <div>
   <Navbar></Navbar>
   <Routes>
    <Route path='/' element={<Home></Home>}></Route>
    <Route path='/function' element={<Functions></Functions>}></Route>
    <Route path='/flashcard' element={<Flashcard></Flashcard>}></Route>
    <Route path='*' element={<Notfound></Notfound>}></Route>
   </Routes>
   <Faq></Faq>
   </div>
  );
}

export default App;
