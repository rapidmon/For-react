import './App.css';
import React, {useState} from 'react';
import style from './style.js'
import Template from './Template.js'
import Head from './Head'
import Box from './Box'
import TodoCreate from './Todocreate';
import styled from 'styled-components';
import axios from 'axios'

const DivButton = styled.div`
  border: 1px dotted black;
  padding: 20px;
  cursor: pointer;
  &: hover {
    background-color: red;
    color: blue;
  }
`

function App() {
  const [weather, setWeather] = useState('');
  const clickHandler = async() =>{
    const API_KEY = 'd4389cad7412a6a110847e67b352fffb';
    const CITY_NAME = 'LONDON';
    await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_KEY}`
    ).then((response) => {
      setWeather(response.data.weather[0].main);
    })
  };

  return (
    // <>
    //   <style.background />
    //   <Template>
    //     <Head />
    //     <Box />
    //     <TodoCreate />
    //   </Template>
    // </>
    <div>
      Home
      <DivButton onClick={clickHandler}>click me!</DivButton>
      <span>현재 날씨는?{weather}</span>
    </div>
  );
}

export default App;
