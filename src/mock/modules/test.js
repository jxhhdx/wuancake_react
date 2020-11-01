

export function hello() {
    return {
        url: '/hello',
        type: 'post',
        data: {
            code: 200,
            message: '请求成功',
            data: {}
        }
    }
}