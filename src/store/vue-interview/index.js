import axios from 'axios';

export const Interviews = {
  namespaced: true,
  state: {
    interviews: [],
  },
  getters: {
    interviews: ({ interviews }) => interviews,
  },
  mutations: {
    fetchedInterviews(state, interviews) {
      state.interviews = interviews;
    },
  },
  actions: {
    async fetchInterviews({ commit }) {
      const interviews = await axios.get('/interviews');
      commit('fetchedInterviews', interviews.data);
    },
  },
};
