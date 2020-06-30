import axios from './axios'


export const BANNER = 'banner'
export const RECOMMEND = 'recommend'

export function getHomeMultidata() {
  return axios({
    url: '/home/multidata'
  })
}