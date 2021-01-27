import axios from '../js/axios'

export default {
    setUsuario(state, value) {
        state.usuario = JSON.parse(value)
        sessionStorage.setItem('usuario', value)
        axios.defaults.headers.common['Authorization'] = JSON.parse(value).token
    },
    logout(state) {
        state.usuario = undefined
        sessionStorage.removeItem('usuario')
        axios.defaults.headers.common['Authorization'] = undefined
    }
}