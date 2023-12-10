import './App.css';
import React, { useEffect, useState } from 'react';
import Loading from './components/loading';
import Routers from './Routers/router';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsLoading(false);
    };

    loadData();
  }, []);

  return (
    <div className="App">
      {isLoading && <div className="LoadingOverlay"><Loading /></div>}
      <div className="Content">
        <Routers />
      </div>
    </div>
  );
}

export default App;