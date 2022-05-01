import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';

const Menu = styled.div`
 position: fixed;
 background-color: #94B3FD;
 display: flex;
 justify-content: flex-start;
 top: 0;
 width: 100%;
 z-index: 20;
 padding-top: 12px;
 padding-bottom: 12px;
`;

const Home = styled.div`
 padding-top: 24px;
 padding-left: 40px;
 padding-right: 40px;
 padding-bottom: 24px;
 font-size: 32px;
 & a{
     text-decoration: none;
     color: inherit;
    }
`;

const Todo = styled.div`
 padding-top: 24px;
 padding-left: 40px;
 padding-right: 40px;
 padding-bottom: 24px;
 font-size: 32px;
 & a{
     text-decoration: none;
     color: inherit;
    }
`;


function Navbar(){
    return(
    <Menu>
     <Home><Link to="/">Home</Link></Home>
     <Todo><Link to="/TodoList">Todo</Link></Todo>
    </Menu>
    )
}

export default Navbar