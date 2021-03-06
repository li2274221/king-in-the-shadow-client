import './index.scss';
import template from './index.html';

import Vue from 'vue';
import Resources from 'resources';
import Dialog from 'services/dialog';

Vue.component('activate-modal', {
	props: {
		destroy: Function
	},
	template,
	data() {
		return {
			activateCode: '',
			isSaveing: false
		};
	},

	methods: {
		save(event) {
			event.preventDefault();

			this.isSaveing = true;

			Resources.account.activate.save({
				invitationCode: this.activateCode
			}).then(response => {
				Dialog.alert('激活成功！', () => {
					window.location.reload();
				});
			}).catch(error => {
				Dialog.alert(error.message);
			}).finally(() => {
				this.isSaveing = false;
			});
		}
	},

	computed: {
		matchedActivateCode() {
			return /^[A-Za-z0-9]{12}$/.test(this.activateCode);
		}
	}
});
