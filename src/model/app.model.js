export default {
  data: {
    title: "App Test"
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
