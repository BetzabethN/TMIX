//NOT USED


///look into this part: const axios = require('axios')

const clientID = process.env.TWITCH_CLIENT_ID

function helix(accessToken) {
    return axios.create({
        baseURL: 'https://api.twitch.tv/helix/',
        headers: {'Client-ID': clientID, 'Authorization': 'Bearer ' + accessToken}
    })
};

