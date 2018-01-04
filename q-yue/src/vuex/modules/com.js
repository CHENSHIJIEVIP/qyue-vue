// import * as types from '../types'

/**
 * App通用配置
 */
const state = {
  loading: false,
  // showToast: false,
  leftNavStatus: false,
  // showSuccess: true,
  // showFail: false,
  // toastMsg: '操作成功',
  // showTimePicker: false,
  // alertMsg: '退出登录',
  // showAlert: false
};

const actions = {

  //左边栏响应状态
  setNavState(context, status) {
    context.commit("comNavStatus", status);
  },
  setLoadingState(context, status) {
    context.commit("comLoadingStatus", status);
  }

};

const getters = {
  loading: state => state.loading,
  showToast: state => state.showToast,
  showAlert: state => state.showAlert
};


const mutations = {
  comNavStatus(state,status){
    state.leftNavStatus = status;
  },
  comLoadingStatus(state,status){
    state.loading=status;
  }
};


export default {
  state,
  actions,
  getters,
  mutations
}
