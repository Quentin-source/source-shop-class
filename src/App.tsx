//Setup
import { Route, Switch } from 'react-router-dom';

//Pages
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

//Component
import Header from './components/Header/Header.component';

//Styles
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route component={HomePage} exact path="/" />
        <Route component={ShopPage} exact path="/shop" />
        <Route component={HomePage} />
      </Switch>
    </>
  );
}

export default App;
