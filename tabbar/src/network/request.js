import axios from "axios";

// 封装方法1
// export function request(config, success, failure) {
//     // 1.创建axios实例
//     const instance = axios.create({
//         baseURL: 'http://123.207.32.32:8000',
//         timeout: 5000,
//     })

//     // 发送真正的网络请求
//     instance(config).then(res => {
//         success(res);
//     }).catch(err => {
//         failure(err);
//     })
// }

// 用法
// request({
//   url: '/home/data'
// }, res => {
//   console.log(res)
// }, err => {
//   console.log(err)
// })


// 封装方法2
// export function request(config) {
//     // 1.创建axios实例
//     const instance = axios.create({
//         baseURL: 'http://123.207.32.32:8000',
//         timeout: 5000,
//     })

//     // 发送真正的网络请求
//     instance(config.baseConfig).then(res => {
//         config.success(res);
//     }).catch(err => {
//         config.failure(err);
//     })
// }

// 用法
// request({
//   baseConfig: {

//   },
//   success: function (res) {

//   },
//   failure: function (err) {

//   }
// })


// Promise方案
// export function request(config) {
//     return new Promise((resolve, reject) => {
//         // 1.创建axios实例
//         const instance = axios.create({
//             baseURL: 'http://123.207.32.32:8000',
//             timeout: 5000,
//         })

//         // 发送真正的网络请求
//         instance(config).then(res => {
//             resolve(res);
//         }).catch(err => {
//             reject(err);
//         })
//     })
// }

// 用法
// request({
//   url: '/home/data'
// }).then(res => {
//   console.log(res)
// }).catch(err => {
//   console.log(err)
// })


// 第四种写法
export function request(config) {
    // 1.创建axios实例
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000,
    })

    // 发送真正的网络请求
    return instance(config)
}

// 用法
// request({
//   url: '/home/data'
// }).then(res => {
//   console.log(res)
// }).catch(err => {
//   console.log(err)
// })