import { createStore } from 'vuex'

export default createStore({
  state: {
    sabores : '',
    adorno : '',

    clientName: '-',
    clientPhone: '-',
    clientMail: '-',
    clientDescript: '-',
    clientFlavors: '-',
    clientAccesories: '-',
  },
  getters: {
  },
  mutations: {
    Sabor(state, random) {
      if (state.sabores != '')
        state.sabores += ', ';
      state.sabores += random;
      
      // console.log(state.sabores);
    },

    Decoracion(state, random) {
      if (state.adorno != '')
        state.adorno += ', ';
      state.adorno += random;
      
      // console.log(state.adorno);
    },

    DataPedido(state, Data){
      state.clientName = Data[0];
      state.clientPhone = Data[1];
      state.clientMail = Data[2];
      state.clientDescript = Data[3];
      state.clientFlavors = Data[4];
      state.clientAccesories = Data[5];
      console.log(Data[0]);
      console.log(Data[1]);
      console.log(Data[2]);
      console.log(Data[3]);
      console.log(Data[4]);
      console.log(Data[5]);
    }
  },
  actions: {
    async Sabor({ commit }, msg) {
      const res = msg;
      // console.log(results);
      commit("Sabor", res);
    },

    async Decoracion({ commit }, msg) {
      const res = msg;
      // console.log(results);
      commit("Decoracion", res);
    },

    async DataPedido({commit}, order){
      //const res = msg;
      // console.log(order[0]);
      // console.log(order[1]);
      // console.log(order[2]);
      // console.log(order[3]);
      // console.log(order[4]);
      // console.log(order[5]);
      commit("DataPedido", order);
    }
  },
  modules: {
  }
})
