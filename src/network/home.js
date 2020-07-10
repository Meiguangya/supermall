import axios from './axios'
// import axios from 'axios';

export const BANNER = 'banner'
export const RECOMMEND = 'recommend'

export function getHomeBanner() {
  return axios({
    url: '/getHomeBanner',
    method:'get'
  })
}

export function fetchSourceData(){
  return axios({
    url:'/getResource',
    method:'get'
  });
}