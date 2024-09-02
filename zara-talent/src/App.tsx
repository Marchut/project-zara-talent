import React from 'react';
import Header from './components/Header/Header';
import './index.scss';
import Landing from './components/Landing/Landing';
import Footer from './components/Footer/Footer';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Landing />
      <Footer />
    </div>
  );
};

export default App;