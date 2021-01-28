// utilizado para consumir e enviar dados para o backend
// import * as db from '@/db/sqliteConnect.js'
import axios from 'axios'
const fs = require('fs');

export const getBooks = async (rootstate) => {
    let books = await axios.get('https://www.abibliadigital.com.br/api/books/', {
        headers: {
            authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlRodSBKYW4gMjggMjAyMSAwMDoyNDowOCBHTVQrMDAwMC5ic2J0cmluZGFkZUBnbWFpbC5jb20iLCJpYXQiOjE2MTE3OTM0NDh9.eGxcomZLJ650Ip_-zjV2f2Bi8LbWp_5iYaDF599SjVY'
        }
    })
}

// export const getCapitulos = (rootstate, { id_livro }) => {
//     return new Promise((res) => {
//         return await db.query()
//     })
// }
