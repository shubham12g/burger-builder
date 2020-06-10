import axios from "axios";

const instance = axios.create({
  baseURL: "https://my-burger-b260c.firebaseio.com/",
});

export default instance;
