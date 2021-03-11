import axios from '../axios'

/*
 * 院系管理模块
 */

// 保存
export const save = (data) => {
    return axios({
        url: '/dept/save',
        method: 'post',
        data
    })
}
// 删除
export const batchDelete = (data) => {
    return axios({
        url: '/dept/delete',
        method: 'post',
        data
    })
}
// 查询院系
export const findDeptTree = () => {
    return axios({
        url: '/dept/findTree',
        method: 'get'
    })
}
