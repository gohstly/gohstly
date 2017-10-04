import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBarHome from './components/AppBar';
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import DrawerMenu from "./components/Drawer";

const App = () =>

  <Router>
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <div>
    
      <AppBarHome/>
      <Nav />
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
