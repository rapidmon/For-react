import style from './style'
import Weather from './Weather'
import React from 'react';
import {useTodoState} from './Todocontext';

function TodoHead({children}){
    const todos = useTodoState();
    const undoneTasks = todos.filter(todo => !todo.done);
    const date = new Date();
    const dayname = date.toLocaleDateString('Ko-KR', { weekday: 'long' });

    console.log(date);
    return <style.headblock>
        <h1>{date.getFullYear()}년 {date.getMonth()+1}월 {date.getDate()}일</h1>
        <div className="weather"><Weather /></div>
        <div className="day">{dayname}</div>
        <div className="tasks-left">할 일 {undoneTasks.length}개 남음</div>
    </style.headblock>
  }
  
export default TodoHead;