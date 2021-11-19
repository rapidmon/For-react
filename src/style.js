import styled from "styled-components"
import { createGlobalStyle } from "styled-components";

const styles = {

    background: createGlobalStyle`
    body{background: #19acef};
    `,

    block: styled.div`
    width: 512px;
    height: 768px;
    position: relative;
    background: white;
    border-radius: 16px;
    box-shadow: 0 0 100px 0 rgba(0, 0, 0, 0.2);
    margin: 0 auto;
    margin-top: 296px;
    margin-bottom: 32px;
    display: flex;
    flex-direction: column;
    `,

    headblock: styled.div`
    padding-top: 24px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 24px;
    border-bottom: 1px solid #e9ecef;
    h1 {
        margin: 0;
        font-size: 36px;
        color: #343a40;
        margin-bottom: 20px;
        }
    .weather {
        margin-bottom: 20px;
    }
    .day {
        margin-top: 5px;
        color: #868e96;
        font-size: 21px;
        clear: both;
        }
    .tasks-left {
        color: #20c997;
        font-size: 18px;
        margin-top: 20px;
        font-weight: bold;
        clear: both;
        }
    `,

    weather: styled.div`
    padding: 0px;
    margin-left: 15px;
    font-size: 18px;
    font-weight: bold;
    `,
}  

export default styles;