import axios from "axios";

const state = {
  sportsList: []
};

const getters = {
  sportsList: state => state.sportsList
};

const mutations = {
  sportsList: (state,res) => {
    state.sportsList = res.data;
  }
};

const actions = {
  /**
   * 获取约跑步列表
   */
  sportsList: (context) => {
    axios({
      method: "get",
      url: "http://localhost:6500/sportList"
    }).then(res => {
      // console.log(res.data);
      context.commit("sportsList",res);
    }, err => {
      console.log(err);
    });

  }

};

export default {
  state,
  actions,
  getters,
  mutations
}
