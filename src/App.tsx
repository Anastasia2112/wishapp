import React from 'react';
import './default.scss';
import Header from './components/Header/index.tsx';
import Homepage from './pages/Homepage/index.tsx'

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Homepage />
      </div>
      
    </div>
  );
}

export default App;
