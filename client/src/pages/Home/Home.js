import React, { Component } from "react";
import { Link } from "react-router-dom";

import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import DrawerMenu from "../../components/Drawer";


class Home extends Component {
    

    
      render() {
        return (
          
            <DrawerMenu>
            </DrawerMenu>
         
        );
      }
    }


export default Home;