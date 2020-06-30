import originAxios from 'axios'


export default function axios(option) {

  return new Promise((resolve, reject) => {
    //1.create axios instance
    const instance = originAxios.create({
      baseURL: 'http://123.207.32.32:8000',
      timeout: 5000
    });

    //2.配置请求和响应式拦截
    instance.interceptors.request.use(config => {
      return config
    }, err => {
      // console.log('来到了request拦截failure中');
      return err
    });

    instance.interceptors.response.use(response => {
      return response.data
    }, err => {
      console.log('来到了response拦截failure中');
      console.log(err);
      if (err && err.response) {
        switch (err.response.status) {
          case 400:
            err.message = '请求错误'
            break
          case 401:
            err.message = '未授权的访问'
            break
        }
      }
      return err
    });


    // 3.传入对象进行网络请求
    instance(option).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })

  });
}