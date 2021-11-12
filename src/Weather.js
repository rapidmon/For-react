import styled from 'styled-components';
import axios from 'axios'
import React, {useState} from 'react';
import style from './style';

// 버튼 css
const DivButton = styled.div`
  flex: 10;
  position: relative;
  width: 110px;
  height: 15px;
  float: left;
  border-radius: 50%;
  padding: 5px;
  margin-bottom: 20px;
  line-height: 12px;
  padding-left: 0px;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: #38d9a9;
  }
`

// api를 불러오는 방식 코드
function Weather(){
    const [weather, setWeather] = useState('');
    const clickHandler = async() =>{
        const API_KEY = 'd4389cad7412a6a110847e67b352fffb';
        const CITY_NAME = 'SEOUL';
        await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_KEY}`
        ).then((response) => {
        setWeather(response.data.weather[0].main);
        })
    };
    return(
    <div>
      {
        weather === '' ?
        <><DivButton onClick={clickHandler}>Today Weather </DivButton>
        <style.weather>{weather}</style.weather></>
        : <div style={{display:'flex'}}><span>Today Weather</span><style.weather>{weather}</style.weather></div>
      }
    </div>
    )
}

export default Weather