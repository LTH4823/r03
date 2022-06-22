import axios from "axios";

export const getStoreList = async () => {
    const res = await axios.get("http://localhost/store")
    return res.data
}