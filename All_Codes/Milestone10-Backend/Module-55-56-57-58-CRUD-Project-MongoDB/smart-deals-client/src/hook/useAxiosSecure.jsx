import axios from 'axios';
import useAuth from './useAuth';
import { useEffect } from 'react';

const axiosSecure = axios.create({
  baseURL: 'http://localhost:3000'
})

const useAxiosSecure = () => {
  const {user} = useAuth()

  //? request interceptors
  useEffect(()=>{
    const requestInterceptor =  axiosSecure.interceptors.request.use((config)=> {
    config.headers.Authorization = `Bearer ${user.accessToken}`
    return config;
  });
  return () => {
    axiosSecure.interceptors.request.eject(requestInterceptor)
  }
  },[user]);

  return axiosSecure;
};

export default useAxiosSecure;