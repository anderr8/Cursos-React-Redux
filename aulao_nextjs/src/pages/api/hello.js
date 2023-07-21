// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//     res.status(200).json({
//         name: 'John Doe',
//         method: req.method
//     })
// }


// export default function handler(req, res) {
//     res.status(200).json({
//         name:'Teste API',
//         metodo: req.method,
//         params:JSON.stringify(req.query)
//     })
// }

// Método direto:
// Informações tipo string
// Usando o sinal + transforma em valor numerico
export default function handler(req, res) {
    res.status(200).json({
        name:'Teste API',
        method: req.method,
        nome: req.query.nome,
        // idade: req.query.idade
        idade: +req.query.idade

    })
}