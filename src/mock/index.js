import Mock from 'mockjs';
import { baseUrl } from '@/utils/global';
import * as login from './modules/login';
import * as user from './modules/user';
import * as dept from './modules/dept';
import * as role from './modules/role';
import * as menu from './modules/menu';
import * as dict from './modules/dict';

// 1. 开启/关闭[所有模块]拦截, 通过调[openMock参数]设置.
// 2. 开启/关闭[业务模块]拦截, 通过调用fnCreate方法[isOpen参数]设置.
// 3. 开启/关闭[业务模块中某个请求]拦截, 通过函数返回对象中的[isOpen属性]设置.
let openMock = true;
// let openMock = false;

fnCreate(login, "login", openMock);
fnCreate(user, "user", openMock);
fnCreate(dept, "dept", openMock);
fnCreate(role, "role", openMock);
fnCreate(menu, "menu", openMock);
fnCreate(dict, "dict", openMock);

/**
 * 创建Mock模拟数据
 * @param {*} mod 模块
 * @param {*} modName 模块名
 * @param {*} isOpen 是否开启Mock拦截前台请求，true - 开启，false - 关闭
 */
function fnCreate (mod, modName, isOpen = true) {
  console.log(modName + "'s Mock is " + (isOpen ? "open" : "closed") + ".");
  if (isOpen) {
    for (let key in mod) {
      ((res) => {
        if (res.isOpen !== false) {
          let url = baseUrl;
          if(!url.endsWith("/")) {
            url = url + "/";
          }
          url = url + res.url;
          Mock.mock(new RegExp(url), res.type, (opts) => {
            opts['data'] = opts.body ? JSON.parse(opts.body) : null;
            delete opts.body;
            console.log('\n');
            console.log('%cMock拦截, 请求: ', 'color:blue', opts);
            console.log('%cMock拦截, 响应: ', 'color:blue', res.data);
            return res.data;
          })
        }
      })(mod[key]() || {})
    }
  }
}
