//Setup
import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import store from "../redux/store/store";

//Firebase
import { auth } from "../firebase/firebase.utils";
import { createUserProfileDocument } from "../firebase/firebase.utils";

//Interface
import { IProps, IUser } from "./app.interface";
import { IRootReducer } from "../redux/reducer.interface";

//Pages
import homepage from "../pages/homepage/homepage.component";
import shoppage from "../pages/shop/shop.component";
import Signpage from "../pages/signpage/signpage.component";

//Component
import Header from "../components/Header/Header.component";

//Actions
import { setCurrentUser } from "../redux/user/user.action";

//Styles
import "./App.css";
import { Console } from "console";

class App extends React.Component<ConnectedProps<typeof connector> & IProps> {
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
          } as IUser);
        });
      } else setCurrentUser(null);
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth!();
  }

  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route component={homepage} exact path="/" />
          <Route component={shoppage} exact path="/shop" />
          <Route
            exact
            path="/sign"
            render={() => {
              console.log(this.props.currentUser);
              return this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <Signpage />
              );
            }}
          />
          <Route component={homepage} />
        </Switch>
      </>
    );
  }
}

const mapStateToProps = ({ user }: IRootReducer) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch: typeof store.dispatch) => ({
  setCurrentUser: (user: IUser | null) => dispatch(setCurrentUser(user)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(App);
