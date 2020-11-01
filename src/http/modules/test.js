import axios from '../axios'

export const hello = (data) => {
    return axios({
        url: '/hello',
        method: 'post',
        data
    })
}

// export const save = (data) => {
//     return axios({
//         url: '/config/save',
//         method: 'post',
//         data
//     })
// }