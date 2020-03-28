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
import Injuries from './pages/Injuries/InjuriesPage';
import HanapPT from './pages/HanapPT/HanapPT';


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/aruga-katawan/" exact component={Home} />
          <Route path="/aruga-katawan/physiotherapy" component={Physiotherapy} />
          <Route path="/aruga-katawan/katawan" component={Muscles} />
          <Route path="/aruga-katawan/injuries" component={Injuries} />
          <Route path="/aruga-katawan/remedyo" component={Remedies} />
          <Route path="/aruga-katawan/about" component={About} />
          <Route path="/aruga-katawan/hanap-pt" component={Articles} />
          <Route path="/aruga-katawan/location" component={HanapPT} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
