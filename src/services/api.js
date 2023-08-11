import axios from "axios";

//4924922222

const api = axios.create({
    baseURL: "https://www.roblox.com/games/"
})

export default api;