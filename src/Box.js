import TodoList from './Todolist';
import styled, { css } from 'styled-components';
import React, {useState, Component} from 'react';
import TodoEntire from './Todoentire';
import TodoFinish from './Todofinish';

const Menuba = styled.div`
    display: flex;
    justify-content: space-around;
    z-index: 5;
    padding-bottom: 15px;
  `

const Entire = styled.div`
    padding: 15px;
    width: 33%; 
    text-align: center;
    border: 2px solid #e9ecef;
    cursor: pointer;
    &:hover {
    color: #38d9a9;
    }
    ${props =>
    props.click &&
    css`
      color: #38d9a9;
      border: 1px solid #e9ecef;
      border-bottom: 0px;
      box-shadow: 5px 0 0 0 rgba(0, 0, 0, 0.2);
    `}
`

const Ing = styled.div`
    padding: 15px;
    width: 33%; 
    text-align: center;
    border: 2px solid #e9ecef;
    cursor: pointer;
    &:hover {
    color: #38d9a9;
    }
    ${props =>
    props.click &&
    css`
      color: #38d9a9;
      border: 1px solid #e9ecef;
      border-bottom: 0px;
      box-shadow: 5px 0px 0px 0 rgba(0, 0, 0, 0.2);
    `}
`

const Finish = styled.div`
    width: 33%; 
    padding: 15px;
    text-align: center;
    border: 2px solid #e9ecef;
    cursor: pointer;
    &:hover {
    color: #38d9a9;
    }
    ${props =>
    props.click &&
    css`
      color: #38d9a9;
      border: 1px solid #e9ecef;
      border-bottom: 0px;
      box-shadow: -5px 0 0 0 rgba(0, 0, 0, 0.2);
    `}
`

function Box(){
    const [menubar, setMenubar] = useState(1);
    return(
    <>
    <Menuba>
        <Entire onClick={() => setMenubar(1)} click ={menubar === 1}>전체 목록</Entire>
        <Ing onClick={() => setMenubar(2)} click ={menubar === 2}>할 일 목록</Ing>
        <Finish onClick={() => setMenubar(3)} click ={menubar === 3}>완료 목록</Finish>
    </Menuba>
    {menubar === 1 ? <TodoEntire/>
    : (menubar === 2 ? <TodoList/>
    : <TodoFinish/>)
    }
    </>
    )
}

export default Box;