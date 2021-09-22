import axios from 'axios'
export function request(config) {
  // return new Promise((resolve, reject) => {
    // 1.创建axios的实例
    const instace = axios.create({
      // baseURL: 'http://123.207.32.32:8000',
      baseURL: 'http://152.136.185.210:7878/api/m5',
      timeout: 5000
    })

    // 2.axios的拦截器
    // instace.interceptors.request.use(config => {
    //   // 1.数据中的信息不符合服务器的要求
    //   // 2.每次发送网络请求时，都希望在界面中显示一个请求的图片
    //   // 3.某些网络请求(比如登录(tokn))，必须携带一些特殊的信息
    //   console.log(config)
    //   // 拦截到数据时需要返回出去
    //   return config
    // }, err => {
    //   console.log(err)
    // })

    // 响应拦截
    instace.interceptors.response.use(res => {
      // console.log(res)
      return res.data
    }, err => {
      console.log(err)
    })

    // 发送真正的网络请求
    // instace(config)
    //   .then(res => {
    //     resolve(res)
    //   })
    //   .catch(err => {
    //     reject(err)
    //   })
    
    //简写
    return instace(config)

  // })

  // 1.创建axios的实例
  // const instance1 = axios.create({
  //   baseURL: "http://123.207.32.32:8000",
  //   timeout: 5000
  // })
  // instance1(config.baseConfig)
  // .then(res => {
  //   config.success(res)
  // }).catch(res => {
  //   config.failure(res)
  // })
  // instance1({
  //   url: "/home/multidata"
  // }).then(res => {
  //   // console.log(res);
  //   success(res)
  // }).catch(err => {
  //   //   console.log(err);
  //     failure(err)
  // })
}