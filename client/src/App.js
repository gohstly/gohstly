import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import darkBaseTheme from 'material-ui/styles';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

import Books from "./pages/Books";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import DrawerMenu from "./components/Drawer";
import purple from 'material-ui/colors/purple';
import green from 'material-ui/colors/green';
import red from 'material-ui/colors/red';

const theme = createMuiTheme({
  palette: {
    primary: purple, // Purple and green play nicely together.
    secondary: {
      ...green,
      A400: '#00e677',
    },
    error: red,
  },
});

const App = () =>

  <Router>
    <MuiThemeProvider theme={theme}>
    <div>
    
      
      
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/books" component={Books} />
        <Route exact path="/books/:id" component={Detail} />
        <Route component={NoMatch} />
      </Switch>
     
    </div>
    </MuiThemeProvider>
  </Router>;
 

export default App;
