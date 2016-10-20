/**
 * 应用入口文件
 * @authors Picker Lee (https://github.com/li2274221)
 * @email   450994392@qq.com
 * @date    2016-09-19 11:21:54
 */

import 'assets/styles/index.scss';

import Vue from 'vue';
import router from 'services/router';

import AccountService from 'services/stores/account';
import Dialog from 'services/dialog';
import G from 'constants';

// 获取当前用户信息
AccountService.get().then(account => {
	new Vue({
		router,
		data() {
			return { account: G.account || {} };
		}
	}).$mount('#app');
}).catch(error => Dialog.alert(error.message));
