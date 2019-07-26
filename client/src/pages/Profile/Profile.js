import React, { Component } from "react";
import { Link } from "react-router-dom";
import FeedCards from "../../components/FeedCards";
import Books from "../Books";

import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import DrawerProfile from "../../components/DrawerProfile";



class Feed extends Component {
  render() {
    return (
      <div>
        <DrawerProfile />
      </div>
    );
  }
}


export default Feed;
