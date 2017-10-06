import axios from "axios";

const logName = 'joebtrna';
const USERURL = 'https://api.twitch.tv/helix/users?login=';
const STREAMURL = 'https://api.twitch.tv/helix/streams?first=20&user_login=';
const METAURL = 'https://api.twitch.tv/helix/streams/metadata?user_login=';
const config = {
	headers: {
		'Custom-Head': 'b4267timv42e334ywp992yx4lbfmaf'
	}
}

export default {

	//PULL USERS
    users: function(query) {
    	return axios.get(USERURL + query, config);
    },


    //PULL STREAMS 
    streams: function(query) {
    	return axios.get(STREAMURL + query, config);
    },


    //PULL METADATA ON STREAMS
    metadata: function(query) {
    	return axios.get(METAURL + query, config);
    }

};


