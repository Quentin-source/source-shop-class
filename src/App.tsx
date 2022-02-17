//Setup
import { Route, Switch } from 'react-router-dom';

//Firebase
import { auth } from './firebase/firebase.utils';
import firebase from 'firebase/compat';
import { createUserProfileDocument } from './firebase/firebase.utils';

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
interface IState extends firebase.firestore.DocumentData {
  id?: string;
  currentUser: firebase.User | null;
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
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef!.onSnapshot((snapShot) => {
          this.setState({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth!();
  }

  render() {
    return (
      <>
        <Header currentUser={this.state.currentUser} />
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
