import logo from './logo.svg'
import './App.scss'
import { Switch, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Switch>
        <Route path="/" element={<Layout />}>
          <Layout />
          <Route path="/" exact={true}>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Route>
      </Switch>
    </>
  )
}

export default App
