export default {
  data: {
    title: "about"
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
