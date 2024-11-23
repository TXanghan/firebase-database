import axios from "axios";

const apiInstance=  axios.create({
    baseURL:"https://fierbase-database-e973c-default-rtdb.firebaseio.com/"
})

export default apiInstance;