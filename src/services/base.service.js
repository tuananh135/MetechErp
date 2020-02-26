import axios from 'axios'

export default axios.create({
    // Below BaseUrl is example => change this when have real APIEndPoint 
    baseURL: "https://verify.thinhtientech.com/api/",
    headers: {
        'Content-Type': 'application/json',
		'Accept': 'application/json',
    }
})