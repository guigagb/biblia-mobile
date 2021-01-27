// utilizado para consumir e enviar dados para o backend
export const callFunction = ({ commit }) => {
    return new Promise((res) => {
        // busca os valores e seta através da mutation
        let value = 'teste'

        commit('setVariable', value)
        res(true)
    })
}
