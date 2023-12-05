import './App.css';
import React, { useEffect, useState } from 'react';
import LoginPage from './view/login';
import CadasterPage from './view/cadaster';
import HomePage from './view/home';
import Loading from './components/loading';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsLoading(false);
    };

    loadData();
  }, []);

  return (
    <div className="App">
      {isLoading && <div className="LoadingOverlay"><Loading /></div>}
      <div className="Content">
        <HomePage />
      </div>
    </div>
  );
}

export default App;