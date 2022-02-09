import './App.css';
import {BrowserRouter as Router, Switch ,Route} from 'react-router-dom'
import Header from './Components/Header';
import Login from './Components/Login';
import Home from './Components/Home';
import Tickets from './Components/Tickets';
import News from './Components/News';
import Checkout from './Components/Checkout';
import Ticketcheckout from './Components/Ticketcheckout';
import PaymentSuccess from './Components/PaymentSuccess';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
        <Route path='/tickets'>
          <Header />
          <Tickets />
        </Route>
        <Route path='/news'>
          <Header />
          <News />
        </Route>
        <Route path='/checkout'>
          <Header />
          <Checkout />
        </Route>
        <Route path='/ticketCheckout'>
          <Header />
          <Ticketcheckout />
        </Route>
        <Route path='/payment'>
          <Header />
          <PaymentSuccess />
        </Route>
        <Route exact path='/auth'>
          <Header />
          <Login />
        </Route>
        <Route path='/'>
        <Header />
        <Home />
        </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
