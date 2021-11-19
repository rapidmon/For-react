import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import {useTodoState} from './Todocontext';
import TodoCreate from './Todocreate';

const Box = styled.div`
    flex: 1;
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto;
    background: white;
    `

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function Todoentire() {
  const todos = useTodoState();

  return (
    <Box>
    <TodoListBlock>
      {todos.map(todo => (
        <TodoItem
          key = {todo.id}
          id = {todo.id}
          text = {todo.text}
          done = {todo.done}
        />
      ))}
    </TodoListBlock>
    <TodoCreate />
    </Box>
  );
}

export default Todoentire;