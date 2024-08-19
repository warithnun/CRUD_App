const express = require('express')
const router = express.Router()
const { read,list,create,update,remove } = require('../Controllers/product')


router.get('/product',list)
router.get('/product/:id',read)
router.post('/product',create)
router.put('/product/:id',update)
router.delete('/product/:id',remove)



// router.post('/product',(req,res)=>{
//     res.send('Hello Post Endpoint')
// })
// router.put('/product/:id',(req,res)=>{
//     res.send('Hello put Endpoint')
// })
// router.delete('/product/:id',(req,res)=>{
//     res.json({name:'wrt',id:555})
// })

module.exports =router