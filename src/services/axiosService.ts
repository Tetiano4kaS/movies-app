import axios from "axios";
import {baseURL} from "../constans/urls";

const axiosInstance = axios.create({baseURL, headers: { accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxM2UzOTA2OTIzZDVlNTdjNTBhYzZhYzA0YWZiMWQ3YSIsInN1YiI6IjYzNGZjOTUzNWY0YjczMDA4ZDU1M2M1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nzqmZzYBybln_9BHEtuFvVcHuTZjc-l3MZ1i9sTRwTM'}});

export {axiosInstance}