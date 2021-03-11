/*
 * 字典管理模块
 */

// 保存
export function save() {
  return {
    url: 'dict/save',
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
    url: 'dict/delete',
    type: 'post',
    data: {
      "code": 200,
      "msg": null,
      "data": 1
    }
  }
}
// 分页查询
export function findPage(params) {
  let findPageData = {
    "code": 200,
    "msg": null,
    "data": {
      "pageNum": 1,
      "pageSize": 8,
      "totalSize": 2,
      "totalPages": 1,
      "content": [
        {
          "id": 1,
          "createBy": "admin",
          "createTime": "2018-09-23T11:52:54.000+0000",
          "lastUpdateBy": null,
          "lastUpdateTime": null,
          "value": "male",
          "label": "男",
          "type": "sex",
          "description": "性别",
          "sort": 0,
          "remarks": "性别",
          "delFlag": 0
        },
        {
          "id": 2,
          "createBy": "admin",
          "createTime": "2018-09-23T11:53:17.000+0000",
          "lastUpdateBy": null,
          "lastUpdateTime": null,
          "value": "female",
          "label": "女",
          "type": "sex",
          "description": "性别",
          "sort": 1,
          "remarks": "性别",
          "delFlag": 0
        }
      ]
    }
  }
  return {
    url: 'dict/findPage',
    type: 'post',
    data: findPageData
  }
}
// 获取用户身份类型
export function findAllIdentityType() {
  let findIdentityTypeData = {"code":200,"msg":null,"data":[{"id":251,"identityName":"教师","identityCode":1,"description":"教师","type":"2","sortby":1,"pid":250,"status":"1","createdTime":"2020-08-18T08:55:03.000+0000","updatedTime":"2020-08-18T08:55:05.000+0000"},{"id":252,"identityName":"学生","identityCode":2,"description":"学生","type":"2","sortby":2,"pid":250,"status":"1","createdTime":"2020-08-18T08:55:03.000+0000","updatedTime":"2020-08-18T08:55:05.000+0000"},{"id":253,"identityName":"其他","identityCode":3,"description":"其他","type":"2","sortby":3,"pid":250,"status":"1","createdTime":"2020-08-18T08:55:03.000+0000","updatedTime":"2020-08-18T08:55:05.000+0000"}]};
  return {
    url: 'dict/findAllIdentityType',
    type: 'get',
    data: findIdentityTypeData
  }
}
// 获取用户状态
export function findAllUserStatus() {
  let findUserStatusData = {"code":200,"msg":null,"data":[{"id":333,"userStatusName":"启用","userStatusCode":1,"description":"启用","type":"2","sortby":1,"pid":332,"status":"1","createdTime":"2020-08-18T08:55:03.000+0000","updatedTime":"2020-08-18T08:55:05.000+0000"},{"id":334,"userStatusName":"禁用","userStatusCode":0,"description":"禁用","type":"2","sortby":1,"pid":332,"status":"1","createdTime":"2020-08-18T08:55:03.000+0000","updatedTime":"2020-08-18T08:55:05.000+0000"},{"id":335,"userStatusName":"已添加AAA用户,未同意协议","userStatusCode":2,"description":"已添加AAA用户,未同意协议","type":"2","sortby":1,"pid":332,"status":"1","createdTime":"2020-08-18T08:55:03.000+0000","updatedTime":"2020-08-18T08:55:05.000+0000"}]};
  return {
    url: 'dict/findAllUserStatus',
    type: 'get',
    data: findUserStatusData
  }
}
