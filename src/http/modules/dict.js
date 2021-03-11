import axios from '../axios'

/*
 * 字典管理模块
 */

// 保存
export const save = (data) => {
    return axios({
        url: '/dict/save',
        method: 'post',
        data
    })
}
// 删除
export const batchDelete = (data) => {
    return axios({
        url: '/dict/delete',
        method: 'post',
        data
    })
}
// 分页查询
export const findPage = (data) => {
    return axios({
        url: '/dict/findPage',
        method: 'post',
        data
    })
}
// 获取用户身份类型
export const findAllIdentityType = () => {
  return axios({
    url: '/dict/findAllIdentityType',
    method: 'get'
  })
}
// 获取用户状态
export const findAllUserStatus = () => {
  return axios({
    url: '/dict/findAllUserStatus',
    method: 'get'
  })
}
