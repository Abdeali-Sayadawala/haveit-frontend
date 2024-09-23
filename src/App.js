import { Routes, Route, useRoutes } from 'react-router-dom';
import mainRoutes from './Routes';
import React from 'react';

function App() {

  // const routes = useRoutes(mainRoutes);

  return (
    <div>
      {mainRoutes}
    </div>
  );
}

export default App;
