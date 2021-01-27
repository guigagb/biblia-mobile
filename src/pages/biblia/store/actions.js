// utilizado para consumir e enviar dados para o backend
import * as db from '@/db/sqliteConnect.js'

export const getCapitulos = (rootstate, { id_livro }) => {
    return new Promise((res) => {
        return await db.query()
    })
}
