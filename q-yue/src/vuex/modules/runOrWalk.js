/*import axios from "axios"

const state = {
  hotList: []
}

const getters = {
  hotList:state => state.hotList
}

const mutations = {
  hotList:(state,res)=>{
    state.ListData = res.data
  }
}

const actions = {
  hotList:(content)=>{
    axios({
       method:"get",
            url:"http://localhost:6500/travelList"
      }).then(res => {
            console.log(res.data);
            this.data = res.data;
            content.commit('hotList', res)
      }, err => {
          console.log(err);
    })
  }
}

export default {
  state,
  actions,
  getters,
  mutations
};
*/