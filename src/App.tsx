//Setup
import { Route, Switch } from 'react-router-dom';

//Firebase
import { auth } from './firebase/firebase.utils';
import  firebase from 'firebase/compat';

//Pages
import homepage from './pages/homepage/homepage.component';
import shoppage from './pages/shop/shop.component';
import signpage from './pages/signpage/signpage.component';

//Component
import Header from './components/Header/Header.component';

//Styles
import './App.css';
import React from 'react';

interface IProps {}
interface IState {
    currentUser : firebase.User | null;
}

class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  unSubscribeFromAuth: Function | null = null;

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth!();
  }

  render() {
    return (
      <>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route component={homepage} exact path="/" />
          <Route component={shoppage} exact path="/shop" />
          <Route component={signpage} exact path="/sign" />
          <Route component={homepage} />
        </Switch>
      </>
    );
  }
}

export default App;
