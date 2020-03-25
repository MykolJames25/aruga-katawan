import React from 'react';
import './App.css';
import Nav from './navigator/SiteNav';
import About from './pages/About/AboutPage';
import Articles from './pages/Articles/ArticlesPage';
import Home from './pages/Home/HomePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Physiotherapy from './pages/Physiotherapy/PhysiotherapyPage';
import Muscles from './pages/Muscles/MusclesPage';
import Remedies from './pages/Remedies/RemediesPage';


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/physiotherapy" component={Physiotherapy} />
          <Route path="/katawan" component={Muscles} />
          <Route path="/remedyo" component={Remedies} />
          <Route path="/about" component={About} />
          <Route path="/hanap-pt" component={Articles} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
