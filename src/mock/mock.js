/* eslint-disacble */
import {staticImgUrl} from './data'
const Mock = require('mockjs')
const Random = Mock.Random



const getHomeBanner=()=>{
  return staticImgUrl;
};


const getResource = () => {
  let resources = []
  for (let i = 0; i < 10; i++) {
    resources.push({
      id: Random.date() + ' ' + Random.time(),
      label: '一级' + Random.csentence(2, 5),
      children: [{
        label: '二级 1-1-1'
      }]
    })
  }
  return resources
}
/**
 * 格式： Mock.mock(url, post/get , 返回的数据)；
 * 当post或get请求到路由的时候mock会拦截并返回
 * 注意写全路径
 **/
Mock.mock('http://localhost:8081/getResource', 'get', getResource());

//home
Mock.mock('http://localhost:8081/getHomeBanner','get',getHomeBanner());
