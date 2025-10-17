import axios from "axios";
const axiosInstance=axios.create({
    baseURL:'http://localhost:3000/',

    withCredentials: true, // send cookies with req
});
const sendData=async(formdata)=>{
            const response=await axiosInstance.post('formdata',formdata);
            return response.data;
        }
export {sendData}
