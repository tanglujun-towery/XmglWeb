/*
 * 用户管理模块
 */

// 保存
export function save() {
  return {
    url: 'user/save',
    type: 'post',
    data: {
      "code": 200,
      "msg": null,
      "data": 1
    }
  }
}
// 批量删除
export function batchDelete() {
  return {
    url: 'user/delete',
    type: 'post',
    data: {
      "code": 200,
      "msg": null,
      "data": 1
    }
  }
}
// 分页查询
export function findPage(data) {
  let findPageData = {"code":200,"msg":"return user list success","data":{"pageNum":1,"pageSize":10,"totalPages":1,"totalSize":10,"content":[{"id":1,"uid":"admin","username":"admin","password":"BC40CD030F0EBFC1E0E2046874E0A940","salt":"0lssk8","realname":"管理员","avatar":null,"phone":"13783658395","email":"113323dd@qq.com","gender":1,"type":1,"departmentCode":null,"departmentName":null,"status":1,"identityCode":null,"third_id":null,"third_type":null,"signed":1,"signTime":null,"isReceive":"0","createTime":"2020-01-20T14:51:43.000+0000","updateTime":"2020-09-19T09:32:48.000+0000","createWhere":1,"roleNames":"管理员角色","userRoles":[{"id":245,"userId":1,"roleId":205,"status":"1","createTime":"2020-07-31T00:56:59.000+0000","updateTime":"2020-07-31T00:57:04.000+0000"}]},{"id":141,"uid":null,"username":"0006171339","password":"734E507DD53F3377B9D5E591AB6FB110","salt":"m0lps7","realname":"童云海","avatar":null,"phone":"13056778888","email":"0006175539@puk.com","gender":null,"type":1,"departmentCode":"00048","departmentName":"信息科学技术学院","status":1,"identityCode":null,"third_id":null,"third_type":null,"signed":1,"signTime":null,"isReceive":"0","createTime":null,"updateTime":null,"createWhere":1,"roleNames":"授课教师,教参管理员","userRoles":[{"id":649,"userId":141,"roleId":200,"status":"1","createTime":"2020-09-19T11:10:23.000+0000","updateTime":"2020-11-02T08:26:23.000+0000"},{"id":2468,"userId":141,"roleId":204,"status":"1","createTime":"2020-11-02T08:26:32.000+0000","updateTime":"2020-11-02T08:26:32.000+0000"}]},{"id":142,"uid":null,"username":"1600010754","password":"734E507DD53F3377B9D5E591AB6FB110","salt":"m0lps7","realname":"宋德英","avatar":null,"phone":null,"email":null,"gender":1,"type":null,"departmentCode":"","departmentName":null,"status":1,"identityCode":null,"third_id":null,"third_type":null,"signed":0,"signTime":null,"isReceive":"0","createTime":null,"updateTime":null,"createWhere":null,"roleNames":null,"userRoles":[]},{"id":144,"uid":null,"username":"1900012747","password":"734E507DD53F3377B9D5E591AB6FB110","salt":"m0lps7","realname":"朱润腾","avatar":null,"phone":null,"email":null,"gender":null,"type":null,"departmentCode":"","departmentName":null,"status":1,"identityCode":null,"third_id":null,"third_type":null,"signed":0,"signTime":null,"isReceive":"0","createTime":null,"updateTime":null,"createWhere":null,"roleNames":null,"userRoles":[]},{"id":150,"uid":"","username":"1600017327","password":"734E507DD53F3377B9D5E591AB6FB110","salt":"m0lps7","realname":"孙永樾","avatar":null,"phone":"13085258888","email":"356797461@qq.com","gender":null,"type":3,"departmentCode":"00048","departmentName":"信息科学技术学院","status":1,"identityCode":"1801213824","third_id":null,"third_type":null,"signed":1,"signTime":null,"isReceive":"0","createTime":"2020-01-20T14:51:43.000+0000","updateTime":"2020-01-20T14:51:43.000+0000","createWhere":1,"roleNames":"学生角色","userRoles":[{"id":514,"userId":150,"roleId":239,"status":"1","createTime":"2020-08-25T06:37:57.000+0000","updateTime":"2020-08-25T06:37:57.000+0000"}]},{"id":151,"uid":"","username":"1801213811","password":"734E507DD53F3377B9D5E591AB6FB110","salt":"m0lps7","realname":"汤旋","avatar":null,"phone":"13833208321","email":"113323@qq.com","gender":null,"type":null,"departmentCode":"00048","departmentName":"信息科学技术学院","status":1,"identityCode":"1801213813","third_id":null,"third_type":null,"signed":null,"signTime":null,"isReceive":"0","createTime":"2020-01-20T14:51:43.000+0000","updateTime":"2020-01-20T14:51:43.000+0000","createWhere":1,"roleNames":"学生角色","userRoles":[{"id":511,"userId":151,"roleId":239,"status":"1","createTime":"2020-08-25T06:37:57.000+0000","updateTime":"2020-08-30T07:51:03.000+0000"}]},{"id":181,"uid":null,"username":"1306186094","password":"314EB5E5C6F3047526AC45CE755421DD","salt":"omxevh","realname":"王琪昕","avatar":"","phone":"15811207955","email":"wangqx@lib.pku.edu.cn","gender":0,"type":1,"departmentCode":"00099","departmentName":"图书馆","status":1,"identityCode":"1306186094","third_id":null,"third_type":2,"signed":1,"signTime":"2020-09-02T03:00:02.000+0000","isReceive":"0","createTime":"2020-09-02T02:59:53.000+0000","updateTime":"2020-09-02T02:59:53.000+0000","createWhere":1,"roleNames":"授课教师,教参管理员","userRoles":[{"id":574,"userId":181,"roleId":200,"status":"1","createTime":"2020-09-02T03:00:02.000+0000","updateTime":"2020-09-29T07:39:59.000+0000"},{"id":575,"userId":181,"roleId":204,"status":"1","createTime":"2020-09-02T03:00:39.000+0000","updateTime":"2020-09-23T00:18:22.000+0000"}]},{"id":182,"uid":null,"username":"1306590219","password":"E166A97013891C13A924D1060B14C205","salt":"mbtvpk","realname":"王文佳","avatar":"","phone":"13810534053","email":"wangwj@lib.pku.edu.cn","gender":2,"type":1,"departmentCode":"00099","departmentName":"图书馆","status":1,"identityCode":null,"third_id":null,"third_type":2,"signed":1,"signTime":"2020-09-02T03:26:49.000+0000","isReceive":null,"createTime":"2020-09-02T03:26:45.000+0000","updateTime":"2020-11-11T00:10:57.000+0000","createWhere":1,"roleNames":"教参管理员","userRoles":[{"id":713,"userId":182,"roleId":204,"status":"1","createTime":"2020-09-02T08:26:30.000+0000","updateTime":"2020-09-23T07:15:05.000+0000"}]},{"id":183,"uid":null,"username":"1606191012","password":"A04661CDD79EDBFD28D0D3E1F5CBBAFC","salt":"xq16db","realname":"王昊贤","avatar":"","phone":"","email":"1606191012@pku.edu.cn","gender":0,"type":1,"departmentCode":"00099","departmentName":"图书馆","status":2,"identityCode":"1606191012","third_id":"","third_type":2,"signed":0,"signTime":null,"isReceive":"0","createTime":"2020-09-04T02:17:40.000+0000","updateTime":"2020-09-04T02:17:40.000+0000","createWhere":1,"roleNames":null,"userRoles":[]},{"id":197,"uid":null,"username":"1706192044","password":"946D5D064EC47A02221F0E74E104D265","salt":"30m08n","realname":"赵静茹","avatar":"","phone":"","email":"1706192044@pku.edu.cn","gender":0,"type":1,"departmentCode":"00099","departmentName":"图书馆","status":1,"identityCode":"1706192044","third_id":"","third_type":2,"signed":1,"signTime":"2020-09-16T05:23:38.000+0000","isReceive":"0","createTime":"2020-09-16T05:23:19.000+0000","updateTime":"2020-09-16T05:23:19.000+0000","createWhere":1,"roleIds":"200,239","roleNames":"授课教师,学生角色","userRoles":[{"id":585,"userId":197,"roleId":200,"status":"1","createTime":"2020-09-16T05:23:30.000+0000","updateTime":null},{"id":586,"userId":197,"roleId":239,"status":"1","createTime":"2020-09-16T05:23:38.000+0000","updateTime":null}]}]}};
  return {
    // url: 'user/conditionList',
    url: 'user/findPage',
    type: 'post',
    data: findPageData
  }
}
// 查找用户的菜单权限标识集合
export function findPermissions() {
  let permsData = {
    "code": 200,
    "msg": null,
    "data": [
      null,
      "sys:user:view",
      "sys:menu:delete",
      "sys:dept:edit",
      "sys:dict:edit",
      "sys:dict:delete",
      "sys:menu:add",
      "sys:user:add",
      "sys:dept:delete",
      "sys:role:edit",
      "sys:role:view",
      "sys:dict:view",
      "sys:user:edit",
      "sys:user:delete",
      "sys:dept:view",
      "sys:dept:add",
      "sys:role:delete",
      "sys:menu:view",
      "sys:menu:edit",
      "sys:dict:add",
      "sys:role:add"
    ]
  }
  return {
    url: 'user/findPermissions',
    type: 'get',
    data: permsData
  }
}
// 根据用户名查找
export function findByName(params) {
  let findPageData = {
    "code": 200,
    "msg": null,
    "data": {
      "id": 1,
      "createBy": "admin",
      "createTime": "2020-11-16T02:15:10.000+0000",
      "lastUpdateBy": "admin",
      "lastUpdateTime": "2020-11-17T10:16:31.000+0000",
      "name": "admin",
      "nickName": "管理员",
      "avatar": null,
      "password": "bd1718f058d8a02468134432b8656a86",
      "salt": "YzcmCZNvbXocrsz9dm8e",
      "email": "admin@qq.com",
      "mobile": "13612345678",
      "status": 1,
      "deptId": 4,
      "delFlag": 0,
      "deptName": "",
      "roleNames": "系统管理员",
      "userRoles": [
        {
          "id": 1,
          "createBy": null,
          "createTime": null,
          "lastUpdateBy": null,
          "lastUpdateTime": null,
          "userId": 1,
          "roleId": 1
        }
      ]
    }
  }
  return {
    url: 'user/findByName',
    type: 'get',
    data: findPageData
  }
}
// 更新用户密码
export function updatePassword(params) {
  let findPageData = {"code":200,"msg":null,"data": 1}
  return {
    url: 'user/updatePassword',
    type: 'get',
    data: findPageData
  }
}
