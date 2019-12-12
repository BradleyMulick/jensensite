const express = require("express");
const productRouter = express.Router()
const uuid = require('uuid/v4')
const Product = require('../models/product.js')

productRouter.get('/', (req, res) => {
    Product.find((err, product) => {
        if (err) {
            res.status(500)
            return res.send(err)
        }
        return res.status(200).send(product)
    })
})




// POST >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
productRouter.post('/', (req, res) => {
    req.body._id = uuid()
    const newProduct = new Product(req.body)
    newProduct.save((err, product) => {
        if (err) return res.status(500).send(err)
        return res.status(201).send(product)
    })
})


// GET ONE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
productRouter.get('/:_id', (req, res) => {
    const foundProduct = Product.findById(req.params._id, (err, product) => {
        if(err) {
            return res.status(500).send(err)
        }
        return res.status(200).send(product)
    })
})



//Delete>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
productRouter.delete('/:_id', (req, res) => {
    Product.findOneAndRemove({ _id: req.params._id }, (err, product) => {
        if (err) {
            res.status(500).send(err)
        }
        const response = {
            message: "Product successfully deleted",
            id: product._id
        }
        return res.status(200).send(response)
    })
})


module.exports = productRouter