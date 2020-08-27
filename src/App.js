import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import fakeData from './fakeData';

function App() {
  const data = fakeData;
  console.log(data);
  return (
    <div className="goal-line">
      
     <Header></Header>
     <Body></Body>
    </div>
  );
}

export default App;
