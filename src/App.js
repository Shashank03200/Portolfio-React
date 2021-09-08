import React, { useState, Suspense, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import Spinner from './components/Spinner/Spinner'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


const Sidebar = React.lazy(() => import('./components/Sidebar/Sidebar'))
const Skills = React.lazy(() => import('./components/Skills/Skills'))
const Home = React.lazy(() => import('./components/Home/Home'))
const About = React.lazy(() => import('./components/About/About'))
const Projects = React.lazy(() => import('./components/Projects/Projects'))
const Contact = React.lazy(() => import('./components/Contact/Contact'))


function App() {

  const [isOutOfView, setIsOutOfView] = useState(false);

  useEffect(() => {

    document.addEventListener("scroll", e => {
      let scrolled = window.scrollY;
      if (scrolled >= 30 && window.innerWidth < 990) {
        setIsOutOfView(true)
      } else {
        setIsOutOfView(false)
      }
    })
  })


  return (


    <Suspense fallback={<Spinner />}>
      <div className="App">
        {!isOutOfView && <Sidebar />}
        <div className="content">
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
      </div>
    </Suspense>
  );
}

export default App;
