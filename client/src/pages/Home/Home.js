import React, { Component } from "react";
import { Link } from "react-router-dom";


import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import PersistentDrawer from "../../components/Drawer";
import TabsMain from "../../components/Tabs";


class Home extends Component {
    

    
      render() {
        return (
          <div>
            <PersistentDrawer/>
            <TabsMain/>
              </div>
            
         
        );
      }
    }


export default Home;