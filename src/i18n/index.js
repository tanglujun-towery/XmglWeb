import Vue from 'vue';
import VueI18n from 'vue-i18n';

// 注册i18n
Vue.use(VueI18n);

// 实例化VueI18n，并引入语言文件
const i18n = new VueI18n({
  locale: 'zh_cn',
  messages: {
    'zh_cn': require('@/assets/languages/zh_cn.json'),
    'en_us': require('@/assets/languages/en_us.json')
  }
})

export default i18n
