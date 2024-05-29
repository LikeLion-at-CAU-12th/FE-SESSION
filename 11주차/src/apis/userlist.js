import axios from "axios";

export const baseURL = "https://gominzipsession.o-r.kr";

export const getPerPage = async(page) => {
    const response = await axios.get(`${baseURL}/lionlist?page=${page}`);
    return response.data;
}

export const getGenderUser = async(gender) => {
    const response = await axios.get(`${baseURL}/lionlist?gender=${gender}`);
    return response.data;
}