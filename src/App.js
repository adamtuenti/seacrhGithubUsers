import Router from './router'
import Header from '../src/components/shared/header/header'
import UserContext from "./contexts/userContext"

import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const variablesStyle = {
    Title: styled.p`
        font-size: 35px;
        text-align: center;
        font-weight: bold;
        @media (max-width: 1000px) {
            font-size: 23.5px !important
        
        }
    `,
    ImageNoRepo: styled.img`
        width: 25%;
        @media (max-width: 1000px) {
            width: 62.5% !important
        
        }
    `,
    TextNoRepo: styled.p`
        font-size: 25px;
        text-align: center;
        font-weight: bold;
        margin-top: 35px;
        margin-bottom: 27.5px;
        @media (max-width: 1000px) {
            margin-top: 27.5px !important;
            font-size: 21.5px !important;
            margin-bottom: 22.5px;
        
        }
    `,
    ButtonSearch: styled.button`
        padding-left: 15.5px;
        padding-right: 15.5px;
        font-size: 15.5px; 
        background-color: #f3a391; 
        color: black; 
        border-radius: 12.5px; 
        padding-top: 7.5px; 
        padding-bottom: 7.5px;
        border-color: #f3a391;
        width: 100%
    `

  }



  return (
    <>
    <UserContext.Provider value = {variablesStyle}>
      <div className="main-container">

        <Header />
        <Router />
      </div>
    </UserContext.Provider>
    </>
  );
}

export default App;

