import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Layout from './components/layout'
import HomePage from './pages/home'
import MoviePage from './pages/movie'

class App extends React.Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/movie/:id" component={MoviePage} />
        </Switch>
      </Layout>
    )
  }
}

export default App
