import axios from 'axios';

//存储数据
const state = {
  travelsList: []
};
//获取数据
const getters = {
  travelsList: state => state.travelsList
};
//触发事件改变数据
const mutations = {
  travelsList: (state,res) => {
    state.travelsList = res.data;
  }
};
//实现异步操作
const actions = {
    /**
     * 获取约跑步列表
     */
    travelsList: (context) => {
      axios({
        method: "get",
        url: "http://localhost:6500/travelList"
      }).then(res => {
        // console.log(res.data);
        context.commit("travelsList",res);
      }, err => {
        console.log(err);
      });

    }
  }
;
export default {
  state,
  actions,
  getters,
  mutations
};
