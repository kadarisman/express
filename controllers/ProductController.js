const product = require("../models/ProductModel");


const get = async (req, res) => {
    try {
        const products = await product.get();
        if(products.length !== 0){
            res.status(201).json({products : products})
        }else{
            res.status(404).json({message : "Data not found"})
        }
    } catch (error) {
        res.status(401).json({message : error});
    }
}

const getByid = async (req, res) => {
    try {        
        const productID = req.params.id;
        const productById = await product.get(productID);
        if(productById.length !==0){
            res.status(201).json({product : productById});
        }else{
            res.status(404).json({message : `Data wirh id ${productID} not found`})
        }
    } catch (error) {
        res.status(401).json({message : error});
    }
}

const create = async (req, res) => {
    try {
        const productData = req.body;
        const insertData = await product.create(productData)
        .then(row => {
            res.status(201).json({
                product : productData,
                message : "Insert success"
            })
        })
        .catch( err => {
            res.status(400).json({ message : err });
        })

    } catch (error) {
        res.status(500).json({message : error});        
    }
}

const update = async (req, res ) =>{
    try {
        const productID = req.params.id;        
        const productById = await product.get(productID);
        const productData = req.body;
        if(productById.length !== 0){
            const update = await product.update(productData, productID)
            .then(row => {
                res.status(201).json({
                    message : `Product with id ${productID} hasbeen updated`
                })
            })
            .catch( err => {
                res.status(400).json({ message : err });
            })
        }else{
            res.status(404).json({
                message : `Product with id ${productID} not found`
            })
        }
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

const distroy = async (req, res ) =>{
    try {
        const productID = req.params.id;
        const productById = await product.get(productID);
        if(productById.length !== 0){
            const distroy = await product.remove(productID)
            .then(row => {
                res.status(201).json({ message : `Product with id ${productID} hasbeen deleted`})
            })
            .catch(err => {
                res.status(400).json({ message : err });
            })
        }else{
            res.status(404).json({
                message : `Product with id ${productID} not found`
            })
        }
    } catch (error) {
        res.status(500).json({ message : error });
    }
}


module.exports = {
    get,
    getByid,
    create,
    update,
    distroy
}