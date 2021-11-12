import './App.css';
import React, {useState} from 'react';
import style from './style.js'
import Template from './Template.js'
import TodoHead from './Head'
import Box from './Box'
import TodoCreate from './Todocreate';
import {TodoProvider} from './Todocontext';
import {BrowserRouter, Route, Link, Routes} from 'react-router-dom';
import Navbar from './navbar';
import homestyle from './Home';

const Home = () => {
  return (
  <homestyle.head> 
   <style.background />
   <h1>this is home</h1>
  </homestyle.head>
  )
};

const TodayTodo = () => {
  return(
    <TodoProvider>
      <style.background />
      <Template>
        <TodoHead />
        <Box />
         <TodoCreate />
      </Template>
    </TodoProvider>
  ) 
};

function App(){
  return (
    <BrowserRouter>
    <div>
      <Navbar />
      <Routes>
        <Route exact path="" element={<Home />} />
        <Route path="todo" element={<TodayTodo />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;