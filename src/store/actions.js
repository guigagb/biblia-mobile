import axios from '../js/axios'
// import MD5 from 'md5'

export const login = (rootState, { login, senha }) => {
    return axios.post('login', {
        call: 'getLogin',
        param: {
            login,
            senha
        }
    })
}