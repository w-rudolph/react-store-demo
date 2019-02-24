export default {
  data: {
    title: "about",
    desc: "Description"
  },
  mutations: {
    updateState(state, payload) {
      return { ...state, ...payload };
    }
  },
  actions: {
    test({ commit }, payload) {
      commit("updateState", payload);
    }
  }
};
