import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: 'e359e44e092644368ca1bd3bda2b4808'
    }
})

