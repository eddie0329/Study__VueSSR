import Vue from "vue";
import Vuex from "vuex";
import {} from './api';

Vue.use(Vuex);

// mutations
const SET_TODOS = "SET_TODOS";

const FETCH_TODOS = "FETCH_TODOS";

export function createStore() {
  return new Vuex.Store({
    state: () => ({
      todos: [],
    }),
    mutations: {
      [SET_TODOS](state, newTodos) {
        state.todos = newTodos;
      },
    },
    actions: {
      async [FETCH_TODOS]({ commit }) {
        const res = await getTodos();
        commit(SET_TODOS, res.data);
      },
    },
  });
}
