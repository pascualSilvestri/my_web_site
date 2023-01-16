import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Nav } from './componentes/Nav';
import { Header } from './componentes/Header';
import { Main } from './componentes/Main';
import { Footer } from './componentes/footer';
import { Btn_arriba } from './componentes/Btn_arriba';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav />
    <Header/>
    <Main/>
    <Footer/>
    <Btn_arriba/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

