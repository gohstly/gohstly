import axios from "axios";
const FRIENDURL = "https://api.steampowered.com/ISteamUser/GetFriendList/v0001/?key=48CFA19B3E11A152DC3DAFE8CD6E1EF4&steamid=";
const RECENTURL = "https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=48CFA19B3E11A152DC3DAFE8CD6E1EF4&steamid=";
const ALLURL = "https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=48CFA19B3E11A152DC3DAFE8CD6E1EF4&steamid="
const PROFILEURL = " https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=48CFA19B3E11A152DC3DAFE8CD6E1EF4&steamids="
const FRIENDKEY = "&relationship=friend";
const RECENTKEY = "&format=json"

export default {
  profile: function(query) {
    return axios.get(PROFILEURL + query);
  },

  friends: function(query) {
    return axios.get(FRIENDURL + query + FRIENDKEY);
  },

  recent: function(query) {
    return axios.get(RECENTURL + query + RECENTKEY);
  },

  all: function(query) {
    return axios.get(ALLURL + query + RECENTKEY);
  }
};
