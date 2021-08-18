import React from 'react';
import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
import Pages from'./pages'
import './index.css'
export default function App() {
  return (
    <Router>
        <Switch>
        <Pages/>
        </Switch>
    </Router>
  );
}
