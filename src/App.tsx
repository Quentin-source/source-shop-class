//Setup
import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import store from './redux/store';

//Firebase
import { auth } from './firebase/firebase.utils';
import { createUserProfileDocument } from './firebase/firebase.utils';

//Interface
import { IProps } from './interfaces/app.interface';
import { IUser } from './interfaces/app.interface';
import { User } from '@firebase/auth-types';

//Pages
import homepage from './pages/homepage/homepage.component';
import shoppage from './pages/shop/shop.component';
import signpage from './pages/signpage/signpage.component';

//Component
import Header from './components/Header/Header.component';

//Actions
import { setCurrentUser } from './redux/user/user.action';

//Styles
import './App.css';

class App extends React.Component<ConnectedProps<typeof connector | IProps>> {
  unSubscribeFromAuth: Function | null = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef!.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setCurrentUser(userAuth!);
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth!();
  }

  render() {
    console.log(this.state);
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
}

const mapDispatchToProps = (dispatch: typeof store.dispatch) => ({
  setCurrentUser: (user: IUser | User) => dispatch(setCurrentUser(user)),
});

const connector = connect(null, mapDispatchToProps);

export default connector(App);
