import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

//DECODE TOKEN
import decode from 'jwt-decode'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:  localStorage.getItem('token') || '',
    usuarioDB: ''
  },
  mutations: {
    obtenerUsuario(state, payload){
      state.token = payload;
      if (payload === ''){
        state.usuarioDB = ''
      } else {
        state.usuarioDB = decode(payload);
        // if (state.usuarioDB.usuario.role === 'ADMIN_ROLE'){
        //   router.push({name: 'AdminIndex'})
        // }
        // if (state.usuarioDB.usuario.role === 'PRODUCER_ROLE'){
        //   router.push({name: 'ProductorIndex'})
        // }
        // if (state.usuarioDB.usuario.role === 'HORECA_ROLE'){
        //   router.push({name: 'HorecaIndex'})
        // }
      }
    }
  },
  actions: {
    guardarUsuario({commit}, payload){
      localStorage.setItem('token', payload)
      commit('obtenerUsuario', payload)
    }, 
    cerrarSesion({commit}){
      commit('obtenerUsuario', '');
      localStorage.removeItem('token')
      router.push({name: 'Home'})
    },
    leerToken({commit}){
      const token = localStorage.getItem('token');
      console.log(token)
      if(token){
        commit('obtenerUsuario', token)
      } else {
        commit('obtenerUsuario', '')
      }
    }

  },
  modules: {
  },
  getters: {
    isActive: state => !!state.token,
    isAdmin: state => state.usuarioDB.usuario.role === 'ADMIN_ROLE',
    isHoreca: state => state.usuarioDB.usuario.role === 'HORECA_ROLE',
    isProducer: state => state.usuarioDB.usuario.role === 'PRODUCER_ROLE'
  }
})
