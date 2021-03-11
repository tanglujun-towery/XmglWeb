<template>
  <div class="page-container">
	<!--工具栏-->
	<div class="toolbar" style="float:left;padding-top:6px;padding-left:15px;">
		<el-form :inline="true" :model="filters" :size="size" style="height: 36px;line-height: 36px;">
      <el-form-item prop="realname">
				<el-input v-model="filters.realname" placeholder="姓名"></el-input>
			</el-form-item>
			<el-form-item>
				<kt-button icon="fa fa-search" :label="$t('action.search')" perms="sys:role:view" type="primary" @click="findPage(null)"/>
			</el-form-item>
			<el-form-item>
				<kt-button icon="fa fa-plus" :label="$t('action.add')" perms="sys:user:add" type="primary" @click="handleAdd" />
			</el-form-item>
		</el-form>
	</div>
	<div class="toolbar" style="float:right;padding-top:6px;padding-right:15px;">
    <el-form :inline="true" :size="size" style="height: 36px;line-height: 36px;">
      <el-form-item>
        <el-button-group>
          <el-tooltip content="刷新" placement="top">
            <el-button icon="fa fa-refresh" @click="findPage(null)"></el-button>
          </el-tooltip>
          <el-tooltip content="列显示" placement="top">
            <el-button icon="fa fa-filter" @click="displayFilterColumnsDialog"></el-button>
          </el-tooltip>
          <el-tooltip content="导出" placement="top">
            <el-button icon="fa fa-file-excel-o" @click="exportUserExcelFile"></el-button>
          </el-tooltip>
        </el-button-group>
      </el-form-item>
    </el-form>
		<!--表格显示列界面-->
		<table-column-filter-dialog ref="tableColumnFilterDialog" :columns="columns"
			@handleFilterColumns="handleFilterColumns">
		</table-column-filter-dialog>
	</div>
	<!--表格内容栏-->
	<kt-table permsEdit="sys:user:edit" permsDelete="sys:user:delete"
		:data="pageResult" :columns="filterColumns"
		@findPage="findPage" @handleEdit="handleEdit" @handleDelete="handleDelete">
	</kt-table>
	<!--新增编辑界面-->
	<el-dialog :title="operation?'新增':'编辑'" width="60%" :visible.sync="dialogVisible" :close-on-click-modal="false">
		<el-form :model="dataForm" label-width="80px" :rules="dataFormRules" ref="dataForm" :size="size"
			label-position="right">
			<el-form-item label="ID" prop="id" v-if="false">
				<el-input v-model="dataForm.id" :disabled="true" auto-complete="off"></el-input>
			</el-form-item>
      <el-row>
        <el-col :span="12">
          <el-form-item label="用户名" prop="username">
            <el-input v-model="dataForm.username" auto-complete="off"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="密码" prop="password">
            <el-input v-model="dataForm.password" type="password" auto-complete="off"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="姓名" prop="realname">
            <el-input v-model="dataForm.realname" auto-complete="off"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="所属院系" prop="departmentCode">
            <el-select v-model="dataForm.departmentCode" placeholder="请选择"
                       style="width: 100%;">
              <el-option v-for="item in deptData" :key="item.departmentCode"
                         :label="item.departmentName" :value="item.departmentCode">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="身份类型" prop="type">
            <el-select v-model="dataForm.type" placeholder="请选择"
                       style="width: 100%;">
              <el-option v-for="item in identityData" :key="item.identityCode"
                         :label="item.identityName" :value="item.identityCode">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="状态" prop="status">
            <el-select v-model="dataForm.status" placeholder="请选择"
                       style="width: 100%;">
              <el-option v-for="item in userStatusData" :key="item.userStatusCode"
                         :label="item.userStatusName" :value="item.userStatusCode">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="手机" prop="phone">
            <el-input v-model="dataForm.phone" auto-complete="off"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="邮箱" prop="email">
            <el-input v-model="dataForm.email" auto-complete="off"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="角色" prop="userRoles">
            <el-select v-model="dataForm.userRoles" multiple placeholder="请选择"
                       style="width: 100%;">
              <el-option v-for="item in roles" :key="item.id"
                         :label="item.name" :value="item.id">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">

        </el-col>
      </el-row>
		</el-form>
		<div slot="footer" class="dialog-footer">
			<el-button :size="size" @click.native="dialogVisible = false">{{$t('action.cancel')}}</el-button>
			<el-button :size="size" type="primary" @click.native="submitForm" :loading="editLoading">{{$t('action.submit')}}</el-button>
		</div>
	</el-dialog>
  </div>
</template>

<script>
import _ from 'lodash'
import PopupTreeInput from "@/components/PopupTreeInput"
import KtTable from "@/views/Core/KtTable"
import KtButton from "@/views/Core/KtButton"
import TableColumnFilterDialog from "@/views/Core/TableColumnFilterDialog"
import { format } from "@/utils/datetime"
export default {
	components:{
		PopupTreeInput,
		KtTable,
		KtButton,
		TableColumnFilterDialog
	},
	data() {
		return {
			size: 'mini',
			filters: {
				realname: ''
			},
			columns: [],
			filterColumns: [],
			// pageRequest: { pageNum: 1, pageSize: 10},
      pageRequest: { pagenum: 1, pagesize: 10},
			pageResult: {},
			operation: false, // true:新增, false:编辑
			dialogVisible: false, // 新增编辑界面是否显示
			editLoading: false,
			dataFormRules: {
        username: [
					{ required: true, message: '请输入用户名', trigger: 'blur'}
				]
			},
			// 新增/编辑界面数据
			dataForm: {
				id: 0,
        username: '',
        realname: '',
				password: '',
        email: '',
        phone: '',
				departmentCode: '',
        type: '',
				status: '',
				userRoles: []
			},
			deptData: [],
      identityData: [],
      userStatusData: [],
			roles: []
		}
	},
	methods: {
		// 获取分页数据
		findPage: function (data) {
			if(data !== null) {
				this.pageRequest = data.pageRequest
			}
			this.pageRequest.params = [{name:'realname', value:this.filters.realname}]
			this.$api.user.findPage(this.pageRequest).then((res) => {
				this.pageResult = res.data;
        this.findUserRoles();
			}).then(data!=null?data.callback:'')
		},
		// 导出Excel用户信息
		exportUserExcelFile: function () {
			this.pageRequest.pageSize = 100000
			this.pageRequest.params = [{name:'realname', value:this.filters.realname}]
			this.$api.user.exportUserExcelFile(this.pageRequest).then((res) => {
				this.$alert(res.data, '导出成功', {
					confirmButtonText: '确定',
					callback: action => {
					}
				})
			})
		},
    // 加载用户角色信息
    findUserRoles: function () {
      this.$api.role.findAll().then((res) => {
        // 加载角色集合
        this.roles = res.data;
        // console.log(JSON.stringify(this.roles));
      })
    },
		// 批量删除
		handleDelete: function (data) {
			this.$api.user.batchDelete(data.params).then(data!=null?data.callback:'')
		},
		// 显示新增界面
		handleAdd: function () {
			this.dialogVisible = true
			this.operation = true
			this.dataForm = {
				id: 0,
        username: '',
        realname: '',
				password: '',
        email: '',
        phone: '',
				departmentCode: '',
        type: '',
				status: '',
				userRoles: []
			}
		},
		// 显示编辑界面
		handleEdit: function (params) {
			this.dialogVisible = true;
			this.operation = false;
			this.dataForm = Object.assign({}, params.row);
			let userRoles = [];
			let userRolesStr = params.row.userRoles;
			if (userRolesStr != null && userRolesStr.length != 0) {
        for(let i=0,len=userRolesStr.length; i<len; i++) {
          userRoles.push(userRolesStr[i].roleId);
        }
      }
			this.dataForm.userRoles = userRoles;
		},
		// 编辑
		submitForm: function () {
			this.$refs.dataForm.validate((valid) => {
				if (valid) {
					this.$confirm('确认提交吗？', '提示', {}).then(() => {
						this.editLoading = true
						let params = Object.assign({}, this.dataForm)
						let userRoles = [];
            let userRolesStr = params.userRoles;
            if (userRolesStr != null && userRolesStr.length != 0) {
              for(let i=0,len=userRolesStr.length; i<len; i++) {
                let userRole = {
                  userId: params.id,
                  roleId: userRolesStr[i]
                }
                userRoles.push(userRole);
              }
            }
						params.userRoles = userRoles;
						this.$api.user.save(params).then((res) => {
							this.editLoading = false
							if(res.code === 200) {
								this.$message({ message: '操作成功', type: 'success' });
								this.dialogVisible = false;
								this.$refs['dataForm'].resetFields();
							} else {
								this.$message({message: '操作失败, ' + res.msg, type: 'error'});
							}
							this.findPage(null);
						})
					})
				}
			})
		},
		// 获取部门列表
		findDeptTree: function () {
			this.$api.dept.findDeptTree().then((res) => {
				this.deptData = res.data;
        // console.log(JSON.stringify(this.deptData));
			})
		},
    // 获取用户身份类型列表
    findAllIdentityType: function () {
      this.$api.dict.findAllIdentityType().then((res) => {
        this.identityData = res.data;
        // console.log(JSON.stringify(this.identityData));
      })
    },
    // 获取用户状态列表
    findAllUserStatus: function () {
      this.$api.dict.findAllUserStatus().then((res) => {
        this.userStatusData = res.data;
        // console.log(JSON.stringify(this.userStatusData));
      })
    },
    // 身份类型格式化
    typeFormat: function (row, column, cellValue, index) {
        const type = row[column.property];
        if (type === 1) {
            return "教师";
        } else if (type === 2) {
            return "学生";
        } else {
            return "其他";
        }
    },
    // 状态格式化
    statusFormat: function (row, column, cellValue, index) {
      const status = row[column.property];
       if (status === 1) {
         return "启用";
       } else if (status === 0) {
         return "禁用";
       } else {
         return "已添加AAA用户,未同意协议";
      }
    },
		// 时间格式化
    dateFormat: function (row, column, cellValue, index){
        return format(row[column.property]);
    },
		// 处理表格列过滤显示
    displayFilterColumnsDialog: function () {
			this.$refs.tableColumnFilterDialog.setDialogVisible(true);
    },
		// 处理表格列过滤显示
    handleFilterColumns: function (data) {
			this.filterColumns = data.filterColumns;
			this.$refs.tableColumnFilterDialog.setDialogVisible(false);
    },
		// 处理表格列过滤显示
    initColumns: function () {
			this.columns = [
        {prop:"id", label:"ID", minWidth:50, visible:false},
				{prop:"username", label:"用户名", minWidth:70, sortable:true},
				{prop:"realname", label:"姓名", minWidth:70},
        {prop:"departmentCode", label:"所属院系编码", minWidth:80, visible:false},
				{prop:"departmentName", label:"所属院系", minWidth:110, sortable:true},
        {prop:"type", label:"身份类型", minWidth:70, formatter:this.typeFormat},
				{prop:"roleNames", label:"角色", minWidth:100},
				{prop:"status", label:"状态", minWidth:120, formatter:this.statusFormat}
				// {prop:"createTime", label:"创建时间", minWidth:120, formatter:this.dateFormat}
			];
      this.filterColumns = _.cloneDeep(this.columns);
      // console.log("filterColumns = " + this.filterColumns);
    }
	},
	mounted() {
    this.findDeptTree();
    this.findAllIdentityType();
    this.findAllUserStatus();
		this.initColumns();
	}
}
</script>

<style scoped>

</style>
