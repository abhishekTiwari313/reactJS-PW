import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Gallery from './Gallery';
import ImageView from './ImageView';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Gallery} />
        <Route path="/image/:id" component={ImageView} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;