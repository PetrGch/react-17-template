import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import { AppProps } from './types';

const App: React.FC<AppProps> = () => {
  // These values could come from props, Redux store, or URL parameters
  const theme = 'light';
  const showHeader = true;

  return (
    <div className="app">
      <Switch>
        <Route 
          exact 
          path="/" 
          render={() => (
            <Home 
              theme={theme} 
              showHeader={showHeader} 
            />
          )} 
        />
      </Switch>
    </div>
  );
};

export default App; 