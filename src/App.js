import logo from './logo.svg';
import './App.css';
import Home from './Home/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Offers from './Offers/Offers';
import { UserTemplate } from './templates/UserTemplate/UserTemplate';
import About from './About/About';
import Contact from './Contact/Contact';
import New from './New/New';
import Login from './Login/Login';
import Register from './Register/Register';

function App () {
  return (
    <BrowserRouter>
      <Switch>
        <UserTemplate path={'/offers'} exact Component={Offers} />
        <UserTemplate path={'/about'} exact Component={About} />
        <UserTemplate path={'/contact'} exact Component={Contact} />
        <UserTemplate path={'/new'} exact Component={New} />
        <Route path='/login' exact component={Login} />
        <Route path='/register' exact component={Register} />
        <UserTemplate path={'/'} exact Component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
