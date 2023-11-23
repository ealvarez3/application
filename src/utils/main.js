import axios from "axios";


const createAxiosInstance = (uri) => {
    return axios.create({
        baseURL: uri,
        headers: {
            "Content-Type": "application/json",
        },
    });
};

export {
    createAxiosInstance,
}