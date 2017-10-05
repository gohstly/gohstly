import React, { Component } from "react";
import { Link } from "react-router-dom";


import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import PersistentDrawer from "../../components/Drawer";


class Home extends Component {
    

    
      render() {
        return (
          
            <PersistentDrawer/>
            
         
        );
      }
    }


export default Home;