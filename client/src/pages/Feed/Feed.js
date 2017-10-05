import React, { Component } from "react";
import { Link } from "react-router-dom";
import FeedCards from "../../components/FeedCards";
import Books from "../Books";

import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import DrawerPlain from "../../components/DrawerPlain";
import TabsMain from "../../components/Tabs";


class Feed extends Component {
    

    
      render() {
        return (
          <div>
            <DrawerPlain/>
            <Books/>
            <TabsMain/>

        </div>
            
         
        );
      }
    }


export default Feed;