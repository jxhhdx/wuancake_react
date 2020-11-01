import config from './config'
import axios from 'axios'

export default function $axios(options){
    return new Promise((resolve, reject)=>{
        const instance = axios.create({
            baseURL: config.baseUrl,
            headers: config.headers,
            timeout: config.timeout,
            withCredentials:config.withCredentials,
        })

        instance.interceptors.request.use(
            config => {
                return config
            },
            error => {
                return Promise.reject(error) // 在调用的那边可以拿到(catch)你想返回的错误信息
            }
        )

        // response 响应拦截器
        instance.interceptors.response.use(
            response => {
                return response.data
            },
            err => {
                if (err && err.response) {
                    switch (err.response.status) {
                        case 404:
                            err.message = `请求地址出错: ${err.response.config.url}`
                            break
                
                        case 500:
                            err.message = '服务器内部错误'
                            break
                        default:
                    }
                }
                return Promise.reject(err) // 返回接口返回的错误信息
            }
        )
        // 请求处理
        instance(options).then(res => {
            resolve(res)
            return false
        }).catch(error => {
            reject(error)
        })
    })

}