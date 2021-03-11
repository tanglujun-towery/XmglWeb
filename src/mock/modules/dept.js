/*
 * 院系管理模块
 */

// 保存
export function save() {
  return {
    url: 'dept/save',
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
    url: 'dept/delete',
    type: 'post',
    data: {
      "code": 200,
      "msg": null,
      "data": 1
    }
  }
}
export function findDeptTree(params) {
  // 查询院系
  let findTreeData = {"code":200,"msg":null,"data":[{"id":16,"departmentName":"数学科学学院","departmentCode":"00001","description":"数学科学学院","type":"2","sortby":1,"pid":15,"status":"1","createdTime":"2020-08-13T10:15:58.000+0000","updatedTime":null},{"id":19,"departmentName":"物理学院","departmentCode":"00004","description":"物理学院","type":"2","sortby":1,"pid":15,"status":"1","createdTime":"2020-08-13T10:15:58.000+0000","updatedTime":null},{"id":25,"departmentName":"化学与分子工程学院","departmentCode":"00010","description":"化学与分子工程学院","type":"2","sortby":1,"pid":15,"status":"1","createdTime":"2020-08-13T10:15:58.000+0000","updatedTime":null},{"id":26,"departmentName":"生命科学学院","departmentCode":"00011","description":"生命科学学院","type":"2","sortby":1,"pid":15,"status":"1","createdTime":"2020-08-13T10:15:58.000+0000","updatedTime":null},{"id":27,"departmentName":"地球与空间科学学院","departmentCode":"00012","description":"地球与空间科学学院","type":"2","sortby":1,"pid":15,"status":"1","createdTime":"2020-08-13T10:15:58.000+0000","updatedTime":null},{"id":28,"departmentName":"环境科学与工程学院","departmentCode":"00013","description":"环境科学与工程学院","type":"2","sortby":1,"pid":15,"status":"1","createdTime":"2020-08-13T10:15:58.000+0000","updatedTime":null},{"id":31,"departmentName":"心理与认知科学学院","departmentCode":"00016","description":"心理与认知科学学院","type":"2","sortby":1,"pid":15,"status":"1","createdTime":"2020-08-13T10:15:58.000+0000","updatedTime":null},{"id":63,"departmentName":"信息科学技术学院","departmentCode":"00048","description":"信息科学技术学院","type":"2","sortby":1,"pid":15,"status":"1","createdTime":"2020-08-13T10:15:58.000+0000","updatedTime":null},{"id":114,"departmentName":"图书馆","departmentCode":"00099","description":"图书馆","type":"2","sortby":1,"pid":15,"status":"1","createdTime":"2020-08-13T10:15:58.000+0000","updatedTime":null}]};
  return {
    url: 'dept/findTree',
    type: 'get',
    data: findTreeData
  }
}
