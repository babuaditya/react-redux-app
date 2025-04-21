import axios from 'axios'
const axiosParams={
    baseUrl:process.env.BASE_URL||""
}
const axiosInstance=axios.create({axiosParams})
