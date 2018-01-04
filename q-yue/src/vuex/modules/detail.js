import axios from "axios";

const state = {
  detail: ''
};

const getters = {
  getDetail: state => state.detail
};

const mutations = {
  getSportDetail: (state, res) => {
    state.detail = res.data;
  },
  getTravelDetail: (state, res) => {
    state.detail = res.data;
  }
};

const actions = {
  /**
   * 获取活动详情
   * payload:传参
   */
  getDetail: (context, payload) => {
    if (payload.router == "running") {
      axios({
        method: "get",
        url: "http://localhost:6500/sportDetail",
        params: {
          sportId: payload.id
        }
      }).then(res => {
        // console.log(res.data);
        context.commit("getSportDetail", res);
      }, err => {
        console.log(err);
      });
    } else if (payload.router == "walking") {
      axios({
        method: "get",
        url: "http://localhost:6500/travelDetail",
        params: {
          travelId: payload.id
        }
      }).then(res => {
        // console.log(res.data);
        context.commit("getTravelDetail", res);
      }, err => {
        console.log(err);
      });
    }


  },
  /**
   * 活动点击次数
   */
  // travelClicks(context, id) {
  //   axios({
  //     method: "get",
  //     url: "http://localhost:6500/travelClickNum",
  //     params: {
  //       travelId: id
  //     }
  //   }).then(res => {
  //     console.log(res.data);
  //     // context.commit("getDetail", res);
  //   }, err => {
  //     console.log(err);
  //   });
  // },
};

export default {
  state,
  actions,
  getters,
  mutations
}
