<template>
  <div class="headbar" :style="{'background':themeColor}"
    :class="collapse?'position-collapse-left':'position-left'">
    <!-- 导航菜单 -->
    <span class="navbar">{{collapse?'':appName}}</span>
    <!-- 工具栏 -->
    <span class="toolbar">
      <el-menu class="el-menu-demo" :background-color="themeColor" text-color="#14889A"
        :active-text-color="themeColor" mode="horizontal">
        <el-menu-item index="1" style="display: none;">
          <!-- 主题切换 -->
          <theme-picker class="theme-picker" :default="themeColor"
                        @onThemeChange="onThemeChange">
          </theme-picker>
        </el-menu-item>
        <el-menu-item index="2" v-popover:popover-message>
          <!-- 我的私信 -->
          <el-badge :value="2" :max="99" class="badge">
            <li style="color:#fff;" class="fa fa-envelope-o fa-lg"></li>
          </el-badge>
          <el-popover ref="popover-message" placement="bottom-end" trigger="click">
            <message-panel></message-panel>
          </el-popover>
        </el-menu-item>
        <el-menu-item index="3" v-popover:popover-notice>
          <!-- 系统通知 -->
          <el-badge :value="3" :max="99" class="badge">
            <li style="color:#fff;" class="fa fa-bell-o fa-lg"></li>
          </el-badge>
          <el-popover ref="popover-notice" placement="bottom-end" trigger="click">
            <notice-panel></notice-panel>
          </el-popover>
        </el-menu-item>
        <el-menu-item index="4" v-popover:popover-personal>
          <!-- 用户信息 -->
          <span class="user-info"><img :src="user.avatar" />{{user.nickName}}</span>
          <el-popover ref="popover-personal" placement="bottom-end" trigger="click" :visible-arrow="false">
            <personal-panel :user="user"></personal-panel>
          </el-popover>
        </el-menu-item>
      </el-menu>
    </span>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import mock from '@/mock/index';
import Hamburger from '@/components/Hamburger';
import ThemePicker from '@/components/ThemePicker';
import NoticePanel from '@/views/Core/NoticePanel';
import MessagePanel from '@/views/Core/MessagePanel';
import PersonalPanel from '@/views/Core/PersonalPanel';
export default {
  components:{
    Hamburger,
    ThemePicker,
    NoticePanel,
    MessagePanel,
    PersonalPanel
  },
  data() {
    return {
      user: {
      },
      activeIndex: '1',
      langVisible: false
    }
  },
  methods: {
    openWindow(url) {
      window.open(url);
    },
    selectNavBar(key, keyPath) {
      // console.log(key, keyPath);
    },
    // 折叠导航栏
    onCollapse: function() {
      this.$store.commit('onCollapse');
    },
    // 切换主题
    onThemeChange: function(themeColor) {
      this.$store.commit('setThemeColor', themeColor);
    },
    // 语言切换
    changeLanguage(lang) {
      lang === '' ? 'zh_cn' : lang;
      this.$i18n.locale = lang;
      this.langVisible = false;
    }
  },
  mounted() {
    let user = sessionStorage.getItem("user");
    if (user) {
      let params = {name:user};
      this.$api.user.findByName(params).then((res) => {
				if(res.code === 200) {
          this.user = res.data;
          this.user.avatar = require("@/assets/user.png");
        }
      })
    }
  },
  computed:{
    ...mapState({
      appName: state=>state.app.appName,
      themeColor: state=>state.app.themeColor,
      collapse: state=>state.app.collapse
    })
  }
}
</script>

<style scoped lang="scss">
.headbar {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1030;
  height: 60px;
  line-height: 60px;
}
.hamburg {
  float: left;
}
.navbar {
  float: left;
  color: #ffffff;
  font-size: 22px;
  padding: 0 0 0 5px;
}
.toolbar {
  float: right;
}
.lang-item {
  font-size: 16px;
  padding-left: 8px;
  padding-top: 8px;
  padding-bottom: 8px;
  cursor: pointer;
}
.lang-item:hover {
  font-size: 18px;
  background: #b0d6ce4d;
}
.user-info {
  font-size: 20px;
  color: #fff;
  cursor: pointer;
  img {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    margin: 10px 0px 10px 10px;
    float: right;
  }
}
.badge {
  line-height: 18px;
}
.position-left {
  left: 200px;
}
.position-collapse-left {
  left: 65px;
}
</style>
