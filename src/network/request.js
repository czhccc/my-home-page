import axios from 'axios'

export function request(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })
  
  // 需要传入两个函数，一个是成功的，一个是失败的，内部原理为Promise.then

  // 2.axios的拦截器
  // 2.1.请求拦截的作用
  instance.interceptors.request.use(config => {
    console.log('请求拦截器 成功');
    // 1.比如config中的一些信息不符合服务器的要求
    // 2.比如每次发送网络请求时, 都希望在界面中显示一个请求的图标
    // 3.某些网络请求(比如登录(token)), 必须携带一些特殊的信息
		config.xxx = 'YYY'
    
    return config // 拿到config后必须返回config，否则默认返回undefined
  }, err => {
    console.log('请求拦截器 失败');
    return Promise.reject(error)
  })

  // 2.2.响应拦截
  instance.interceptors.response.use(res => {
    console.log('响应拦截器 成功')
    return res // 拿到config后必须返回config，否则默认返回undefined
    // return res.data // 也口以只返回需要的东西
  }, err => {
    console.log('响应拦截器 失败');
    return Promise.reject(error)
  })

  // 3.发送真正的网络请求
  return instance(config) // instance本身返回的就是Promise，因此可以直接return
  	// 或
  axios({
    method: 'GET',
    url: '...'
  }).then(res => {
    console.log('自定义回调处理成功的结果')
  }).catch(err => {
    console.log('自定义失败回调')
  })
}