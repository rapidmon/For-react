import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import {useTodoState} from './Todocontext';

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

function Todofinish() {
  const todos = useTodoState();
  const todosfilter = todos.filter(item => item.done === true);

  return (
    <Box>
    <TodoListBlock>
      {todosfilter.map(todo => (
        <TodoItem
          key = {todo.id}
          id = {todo.id}
          text = {todo.text}
          done = {todo.done}
        />
      ))}
    </TodoListBlock>
    </Box>
  );
}

export default Todofinish;