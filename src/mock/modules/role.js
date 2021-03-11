/*
 * 角色管理模块
 */

// 保存
export function save() {
  return {
    url: 'role/save',
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
    url: 'role/delete',
    type: 'post',
    data: {
      "code": 200,
      "msg": null,
      "data": 1
    }
  }
}
// 查询全部
export function findAll() {
  let findAllData = {"code":200,"msg":null,"data":[{"id":200,"code":"role_teacher","name":"授课教师","description":null,"sortby":1,"status":"1","createTime":"2020-07-22T00:38:30.000+0000","updateTime":"2020-09-15T18:52:12.000+0000"},{"id":247,"code":"role_assistant_teacher","name":"助教","description":null,"sortby":2,"status":"1","createTime":"2020-07-22T00:38:30.000+0000","updateTime":"2020-09-15T18:52:12.000+0000"},{"id":239,"code":"role_student","name":"学生角色","description":null,"sortby":3,"status":"1","createTime":"2020-07-22T00:38:30.000+0000","updateTime":"2020-09-15T18:52:12.000+0000"},{"id":204,"code":"role_resource_admin","name":"教参管理员","description":null,"sortby":4,"status":"1","createTime":"2020-07-22T00:38:30.000+0000","updateTime":"2020-09-15T18:52:12.000+0000"},{"id":205,"code":"admin","name":"管理员角色","description":null,"sortby":5,"status":"1","createTime":"2020-07-22T00:38:30.000+0000","updateTime":"2020-09-15T18:52:12.000+0000"},{"id":202,"code":"role_academic_admin","name":"教务管理员角色","description":null,"sortby":6,"status":"1","createTime":"2020-07-22T00:38:30.000+0000","updateTime":"2020-09-15T18:52:12.000+0000"},{"id":268,"code":"role_history_admin","name":"历史学系-教参管理员","description":null,"sortby":11,"status":"1","createTime":"2020-07-22T00:38:30.000+0000","updateTime":"2020-09-15T18:52:12.000+0000"},{"id":269,"code":"role_sociology_admin","name":"社会学系-教参管理员","description":null,"sortby":12,"status":"1","createTime":"2020-07-22T00:38:30.000+0000","updateTime":"2020-09-15T18:52:12.000+0000"}]};
  return {
    url: 'role/findAll',
    type: 'get',
    data: findAllData
  }
}
// 分页查询
export function findPage(params) {
  let findPageData = {
    "code": 200,
    "msg": null,
    "data": {
      "pageNum": 0,
      "pageSize": 0,
      "totalSize": 4,
      "totalPages": 0,
      "content": [
        {
          "id": 1,
          "createBy": "admin",
          "createTime": "2019-01-19T03:11:11.000+0000",
          "lastUpdateBy": "admin",
          "lastUpdateTime": "2019-01-19T11:07:18.000+0000",
          "name": "admin",
          "remark": "管理员角色",
          "delFlag": 0
        },
        {
          "id": 2,
          "createBy": "admin",
          "createTime": "2019-01-19T03:11:11.000+0000",
          "lastUpdateBy": "admin",
          "lastUpdateTime": "2019-01-19T03:39:28.000+0000",
          "name": "resource_admin",
          "remark": "教参管理员",
          "delFlag": 0
        },
        {
          "id": 4,
          "createBy": "admin",
          "createTime": "2019-01-19T03:11:11.000+0000",
          "lastUpdateBy": "admin",
          "lastUpdateTime": "2019-01-19T03:11:11.000+0000",
          "name": "teacher",
          "remark": "授课教师",
          "delFlag": 0
        },
        {
          "id": 3,
          "createBy": "admin",
          "createTime": "2019-01-19T03:11:11.000+0000",
          "lastUpdateBy": "admin",
          "lastUpdateTime": "2019-01-19T03:39:28.000+0000",
          "name": "assistant_teacher",
          "remark": "助教",
          "delFlag": 0
        },
        {
          "id": 4,
          "createBy": "admin",
          "createTime": "2019-01-19T03:11:11.000+0000",
          "lastUpdateBy": "admin",
          "lastUpdateTime": "2019-01-19T03:11:11.000+0000",
          "name": "student",
          "remark": "学生角色",
          "delFlag": 0
        }
      ]
    }
  }
  return {
    url: 'role/findPage',
    type: 'post',
    data: findPageData
  }
}
// 查询角色菜单集合
export function findRoleMenus(params) {
  let findRoleMenuData = {
    "code": 200,
    "msg": null,
    "data": [
      {
        "id": 1,
        "createBy": null,
        "createTime": null,
        "lastUpdateBy": null,
        "lastUpdateTime": null,
        "parentId": 0,
        "name": "系统管理",
        "url": null,
        "perms": null,
        "type": 0,
        "icon": "el-icon-setting",
        "orderNum": 0,
        "delFlag": 0,
        "parentName": null,
        "level": null,
        "children": null
      },
      {
        "id": 2,
        "createBy": null,
        "createTime": null,
        "lastUpdateBy": null,
        "lastUpdateTime": null,
        "parentId": 1,
        "name": "用户管理",
        "url": "/sys/user",
        "perms": null,
        "type": 1,
        "icon": "el-icon-service",
        "orderNum": 1,
        "delFlag": 0,
        "parentName": null,
        "level": null,
        "children": null
      },
      {
        "id": 3,
        "createBy": null,
        "createTime": null,
        "lastUpdateBy": null,
        "lastUpdateTime": null,
        "parentId": 2,
        "name": "查看",
        "url": null,
        "perms": "sys:user:view",
        "type": 2,
        "icon": null,
        "orderNum": 0,
        "delFlag": 0,
        "parentName": null,
        "level": null,
        "children": null
      },
      {
        "id": 4,
        "createBy": null,
        "createTime": null,
        "lastUpdateBy": null,
        "lastUpdateTime": null,
        "parentId": 2,
        "name": "新增",
        "url": null,
        "perms": "sys:user:add",
        "type": 2,
        "icon": null,
        "orderNum": 0,
        "delFlag": 0,
        "parentName": null,
        "level": null,
        "children": null
      },
      {
        "id": 5,
        "createBy": null,
        "createTime": null,
        "lastUpdateBy": null,
        "lastUpdateTime": null,
        "parentId": 2,
        "name": "修改",
        "url": null,
        "perms": "sys:user:edit",
        "type": 2,
        "icon": null,
        "orderNum": 0,
        "delFlag": 0,
        "parentName": null,
        "level": null,
        "children": null
      },
      {
        "id": 6,
        "createBy": null,
        "createTime": null,
        "lastUpdateBy": null,
        "lastUpdateTime": null,
        "parentId": 2,
        "name": "删除",
        "url": null,
        "perms": "sys:user:delete",
        "type": 2,
        "icon": null,
        "orderNum": 0,
        "delFlag": 0,
        "parentName": null,
        "level": null,
        "children": null
      },
      {
        "id": 12,
        "createBy": null,
        "createTime": null,
        "lastUpdateBy": null,
        "lastUpdateTime": null,
        "parentId": 1,
        "name": "角色管理",
        "url": "/sys/role",
        "perms": null,
        "type": 1,
        "icon": "el-icon-view",
        "orderNum": 4,
        "delFlag": 0,
        "parentName": null,
        "level": null,
        "children": null
      },
      {
        "id": 13,
        "createBy": null,
        "createTime": null,
        "lastUpdateBy": null,
        "lastUpdateTime": null,
        "parentId": 12,
        "name": "查看",
        "url": null,
        "perms": "sys:role:view",
        "type": 2,
        "icon": null,
        "orderNum": 0,
        "delFlag": 0,
        "parentName": null,
        "level": null,
        "children": null
      },
      {
        "id": 14,
        "createBy": null,
        "createTime": null,
        "lastUpdateBy": null,
        "lastUpdateTime": null,
        "parentId": 12,
        "name": "新增",
        "url": null,
        "perms": "sys:role:add",
        "type": 2,
        "icon": null,
        "orderNum": 0,
        "delFlag": 0,
        "parentName": null,
        "level": null,
        "children": null
      },
      {
        "id": 15,
        "createBy": null,
        "createTime": null,
        "lastUpdateBy": null,
        "lastUpdateTime": null,
        "parentId": 12,
        "name": "修改",
        "url": null,
        "perms": "sys:role:edit",
        "type": 2,
        "icon": null,
        "orderNum": 0,
        "delFlag": 0,
        "parentName": null,
        "level": null,
        "children": null
      },
      {
        "id": 16,
        "createBy": null,
        "createTime": null,
        "lastUpdateBy": null,
        "lastUpdateTime": null,
        "parentId": 12,
        "name": "删除",
        "url": null,
        "perms": "sys:role:delete",
        "type": 2,
        "icon": null,
        "orderNum": 0,
        "delFlag": 0,
        "parentName": null,
        "level": null,
        "children": null
      },
      {
        "id": 17,
        "createBy": null,
        "createTime": null,
        "lastUpdateBy": null,
        "lastUpdateTime": null,
        "parentId": 1,
        "name": "菜单管理",
        "url": "/sys/menu",
        "perms": null,
        "type": 1,
        "icon": "el-icon-menu",
        "orderNum": 5,
        "delFlag": 0,
        "parentName": null,
        "level": null,
        "children": null
      },
      {
        "id": 18,
        "createBy": null,
        "createTime": null,
        "lastUpdateBy": null,
        "lastUpdateTime": null,
        "parentId": 17,
        "name": "查看",
        "url": null,
        "perms": "sys:menu:view",
        "type": 2,
        "icon": null,
        "orderNum": 0,
        "delFlag": 0,
        "parentName": null,
        "level": null,
        "children": null
      },
      {
        "id": 19,
        "createBy": null,
        "createTime": null,
        "lastUpdateBy": null,
        "lastUpdateTime": null,
        "parentId": 17,
        "name": "新增",
        "url": null,
        "perms": "sys:menu:add",
        "type": 2,
        "icon": null,
        "orderNum": 0,
        "delFlag": 0,
        "parentName": null,
        "level": null,
        "children": null
      },
      {
        "id": 20,
        "createBy": null,
        "createTime": null,
        "lastUpdateBy": null,
        "lastUpdateTime": null,
        "parentId": 17,
        "name": "修改",
        "url": null,
        "perms": "sys:menu:edit",
        "type": 2,
        "icon": null,
        "orderNum": 0,
        "delFlag": 0,
        "parentName": null,
        "level": null,
        "children": null
      },
      {
        "id": 21,
        "createBy": null,
        "createTime": null,
        "lastUpdateBy": null,
        "lastUpdateTime": null,
        "parentId": 17,
        "name": "删除",
        "url": null,
        "perms": "sys:menu:delete",
        "type": 2,
        "icon": null,
        "orderNum": 0,
        "delFlag": 0,
        "parentName": null,
        "level": null,
        "children": null
      },
      {
        "id": 22,
        "createBy": null,
        "createTime": null,
        "lastUpdateBy": null,
        "lastUpdateTime": null,
        "parentId": 1,
        "name": "字典管理",
        "url": "/sys/dict",
        "perms": null,
        "type": 1,
        "icon": "el-icon-edit-outline",
        "orderNum": 7,
        "delFlag": 0,
        "parentName": null,
        "level": null,
        "children": null
      },
      {
        "id": 23,
        "createBy": null,
        "createTime": null,
        "lastUpdateBy": null,
        "lastUpdateTime": null,
        "parentId": 22,
        "name": "查看",
        "url": null,
        "perms": "sys:dict:view",
        "type": 2,
        "icon": null,
        "orderNum": 0,
        "delFlag": 0,
        "parentName": null,
        "level": null,
        "children": null
      },
      {
        "id": 24,
        "createBy": null,
        "createTime": null,
        "lastUpdateBy": null,
        "lastUpdateTime": null,
        "parentId": 22,
        "name": "新增",
        "url": null,
        "perms": "sys:dict:add",
        "type": 2,
        "icon": null,
        "orderNum": 0,
        "delFlag": 0,
        "parentName": null,
        "level": null,
        "children": null
      },
      {
        "id": 25,
        "createBy": null,
        "createTime": null,
        "lastUpdateBy": null,
        "lastUpdateTime": null,
        "parentId": 22,
        "name": "修改",
        "url": null,
        "perms": "sys:dict:edit",
        "type": 2,
        "icon": null,
        "orderNum": 0,
        "delFlag": 0,
        "parentName": null,
        "level": null,
        "children": null
      },
      {
        "id": 26,
        "createBy": null,
        "createTime": null,
        "lastUpdateBy": null,
        "lastUpdateTime": null,
        "parentId": 22,
        "name": "删除",
        "url": null,
        "perms": "sys:dict:delete",
        "type": 2,
        "icon": null,
        "orderNum": 0,
        "delFlag": 0,
        "parentName": null,
        "level": null,
        "children": null
      }
    ]
  }
  return {
    url: 'role/findRoleMenus',
    type: 'get',
    data: findRoleMenuData
  }
}
