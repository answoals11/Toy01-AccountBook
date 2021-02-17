import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import {
  Main,
} from './pages';

function App() {

  return (
    <BrowserRouter>
      <Route exact path="/" component={Main}/>
    </BrowserRouter>
  );
}

export default App;
