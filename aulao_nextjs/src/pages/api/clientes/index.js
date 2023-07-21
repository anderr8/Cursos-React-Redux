// Fazendo teste de api com o programa Postman
// 204 -> sem conteúdo
// 405 -> method not allowed = método não suportado

// export default function cliente(req, res) {
//     res.status(204).send()
// }

// export default function cliente(req, res) {
//     res.status(200).json({
//         id: 3,
//         nome: 'Nanda',
//         idade: 33
//     })
// }

export default function handler(req, res) {
    if(req.method === "GET") {
        handleGet(req, res)
    } else {
        res.status(405).send()
    }
}

function handleGet(req, res) {
    res.status(200).json({
        id: 3,
        nome: 'Nanda', 
        idade: 33
    })
}