import axios from "axios"


export const iqshaService = {
    
    getAllGames : async() => {
        const responce = await axios.get("https://my-json-server.typicode.com/wdfwwkkee/iqsha-games/categories")
        return responce.data;
    },
    getGameById : async(id) => {
        const responce = await axios.get(`https://my-json-server.typicode.com/wdfwwkkee/iqsha-games/categories?id=${id}`)
        return responce.data[0];
    }
}