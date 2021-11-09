import './App.css';
import React, {useState} from 'react';
import style from './style.js'
import Template from './Template.js'
import TodoHead from './Head'
import Box from './Box'
import TodoCreate from './Todocreate';
import {TodoProvider} from './Todocontext';


function App(){
  return (
    <TodoProvider>
      <style.background />
      <Template>
        <TodoHead />
        <Box />
        <TodoCreate />
      </Template>
    </TodoProvider>
  );
}

export default App;
