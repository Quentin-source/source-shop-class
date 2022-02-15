//Setup
import { Route, Switch } from 'react-router-dom';

//Pages
import Homepage from './pages/homepage/homepage.component';
//Styles
import './App.css';

function App() {
  return (
    <Switch>
      <Route component={Homepage} exact path="/" />
      <Route component={Homepage} />
    </Switch>
  );
}

export default App;
