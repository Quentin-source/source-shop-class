//Setup
import { Route, Switch } from 'react-router-dom';

//Pages
import homepage from './pages/homepage/homepage.component';
import shoppage from './pages/shop/shop.component';
import signpage from './pages/signpage/signpage.component';

//Component
import Header from './components/Header/Header.component';

//Styles
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route component={homepage} exact path="/" />
        <Route component={shoppage} exact path="/shop" />
        <Route component={signpage} exact path="/sign" />
        <Route component={homepage} />
      </Switch>
    </>
  );
}

export default App;
