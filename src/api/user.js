// 用户相关接口封装

import request from '@/utils/request'

export const login = ({
    username,
    password
}) => {
    return request({
        method: 'POST',
        url: '',
        data: {
            username,
            password
        }
    })
}