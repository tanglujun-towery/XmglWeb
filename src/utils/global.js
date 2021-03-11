/**
 * 全局常量、方法封装模块
 * 通过原型挂载到Vue属性
 * 通过 "this.global.变量名" 调用
 */

 // 后台管理系统服务器地址
export const baseUrl = '/api';
// export const baseUrl = 'http://162.105.138.49:8080';

export default {
    baseUrl
}
