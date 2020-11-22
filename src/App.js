import React from 'react';
import {Switch,Route,BrowserRouter as Router,Redirect} from 'react-router-dom';
//import {Login,Registro,Mapa,Info} from './pages';
import {ThemeProvider} from '@material-ui/core/styles'; 
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';
import {Login,Registro,Mapa,Info} from './pages';
import {AuthProvider} from'./auth';
import PrivateRoute from './privateRoute'

function App() {
  return (
  <ThemeProvider theme={theme}>
    <CssBaseline/>
    <AuthProvider>
    <Router>
      <Switch>
        <Route exact path="/">
	  <Redirect to="/login" />
        </Route>
        <Route path="/login" component={Login}/>
        <Route path="/registro" component={Registro}/>
	<PrivateRoute path="/mapa" component={Mapa}/>
	<Route path="/info" component={Info}/>
	<Route >
	  404
        </Route>
      </Switch>
    </Router>
    </AuthProvider>
  </ThemeProvider>
  );
}

export default App;
