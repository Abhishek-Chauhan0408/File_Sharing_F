import axios from "axios";

const API_URL = "https://file-sharing-b.onrender.com";
// const API_URL='https://filesharing-b.onrender.com';

export const uploadFile = async (data) => {
  try {
    console.log("upload funciton working!!");
    let response = await axios.post(`${API_URL}/upload`, data);
    console.log("response path:::", response);
    return response.data;
  } catch (error) {
    console.log("Error While Calling", error.message);
  }
};
