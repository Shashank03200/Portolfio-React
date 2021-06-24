import React from 'react'
import { Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Suspense } from 'react';

const Sidebar = React.lazy(() => import('./components/Sidebar/Sidebar'))
const Skills = React.lazy(() => import('./components/Skills/Skills'))
const Home = React.lazy(() => import('./components/Home/Home'))
const About = React.lazy(() => import('./components/About/About'))
const Projects = React.lazy(() => import('./components/Projects/Projects'))
const Contact = React.lazy(() => import('./components/Contact/Contact'))


function App() {
  return (
    <Suspense fallback={<p>Loading.. </p>}>
      <div className="App">
        <Sidebar />
        <Switch>

          <Route path="/aboutme">
            <About />
          </Route>


          <Route path="/skills">
            <Skills />
          </Route>


          <Route path="/projects">
            <Projects />
          </Route>


          <Route path="/contact">
            <Contact />
          </Route>



          <Route path="/">
            <Home />
          </Route>

        </Switch>

      </div>
    </Suspense>
  );
}

export default App;
