// ---rafce

import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateBook from "./pages/CreateBook";
import EditBook from "./pages/EditBooks";
import DeleteBook from "./pages/DeleteBooks";
import ShowBooks from "./pages/ShowBooks";

const App = () => {
  return (
    <Routes basename="/Bookstore/books/">
      <Route path='/Bookstore/' element={<Home />}></Route>
      <Route path='/Bookstore/books/create' element={<CreateBook/>}></Route> 
      <Route path='/Bookstore/books/edit/:id' element={<EditBook/>}></Route>
       <Route path='/Bookstore/books/details/:id' element={<ShowBooks/>}></Route>
      <Route path='/Bookstore/books/delete/:id' element={<DeleteBook/>}></Route> 
    </Routes>
  );
};

export default App;
