const BillingCycle = require('./billingCycle')
const errorHandler = require('../common/errorHandler')

BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions({new: true, runValidators: true})
// Interceptando depois dos métodos:
BillingCycle.after('post', errorHandler).after('put', errorHandler)




BillingCycle.route('count', (req, res, next) => {
    BillingCycle.count((error, value) => {
        if(error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json({value})
        }
    })
})

BillingCycle.route('get', (req, res, next) => {

    BillingCycle.find({}, (err, docs) => {

    if(!err) {

        res.json(docs)

    } else {
        res.status(500).json({errors: [error]})

        }

    }).skip(req.query.skip).limit(req.query.limit)

})

// BillingCycle.route('summary', (req, res, next) =>{
//     res.send('ok')
// })


BillingCycle.route('summary', (req, res, next) => {
  
// Aggregation Pipeline Operations:
    BillingCycle.aggregate({ 
        $project: {credit: {$sum: "$credits.value"}, debt: {$sum: "$debts.value"}} 
    }, { 
        $group: {_id: null, credit: {$sum: "$credit"}, debt: {$sum: "$debt"}}
    }, { 
        $project: {_id: 0, credit: 1, debt: 1}
    }, (error, result) => {
    if(error) {
        res.status(500).json({errors: [error]})
   } else {
            res.json(result[0] || {credit: 0, debt: 0})
    }
  })
})

// BillingCycle.route('get', (req, res, next) => {
//     BillingCycle.find({}, (err, docs) => {
//         if (!err) {
//             res.json(docs)
//         } else {
//             res.status(500).json({ errors: [error] })
//         }
//     }).skip(req.query.skip).limit(req.query.limit)
// })

module.exports = BillingCycle


// Todas as rotas estão funcionando, menos a que realiza o GET. Investigamos e de fato, o get retorna apenas um array vazio. Cremos que seja algum problema versão do  node-restful com as demais bibliotecas. Felizmente, podemos circundar esse problema sobrescrevendo a rota Get.

// BillingCycle.route('get', (req, res, next) => {

//     BillingCycle.find({}, (err, docs) => {

//         if(!err) {

//             res.json(docs)

//         } else {

//             res.status(500).json({errors: [error]})

//         }

//     })

// })