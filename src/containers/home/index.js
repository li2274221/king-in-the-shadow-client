/**
 * 主页面
 * @authors Picker Lee (https://github.com/li2274221)
 * @email   450994392@qq.com
 * @date    2016-09-18 23:26:01
 */

// import Swiper from 'swiper';
// import 'swiper/dist/css/swiper.css';

import './index.scss';
import template from './index.html';

import 'components/base/head-menu';
import G from 'constants';

export default {
	template,
	data() {
		const account = G.account || {};
		return { account };
	},
	created() {


	}
};
