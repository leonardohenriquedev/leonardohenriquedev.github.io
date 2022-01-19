import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Contato from './pages/Contato';
import Home from './pages/Home';
import Projetos from './pages/Projetos';
import NotFound from './pages/NotFound';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" render={(props)=><Home {...props} />} />
          <Route path="/projetos" component={<Projetos />} />
          <Route path="/contato" component={<Contato />} />
          <Route path="*" component={<NotFound />} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
