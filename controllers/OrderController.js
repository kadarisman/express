const order = require("../models/OrderModel");

const get = async(req, res) => {
    try {
        const orderData = await order.get();
        if(orderData.length !==0 ){
            res.status(201).json({
                orders : orderData
            })
        }else{
            res.status(404).json({
                message : "Data not found"
            })
        }
    } catch (error) {
        res.status(500).json({
            message : error
        })
    }    
}

const getByid = async(req, res) =>{
    try {
        const oderId = req.params.id;
        const orderById = await order.get(oderId);
        if(orderById.length !== 0){
            res.status(201).json({
                order : orderById
            })
        }else{
            res.status(404).json({
                message : `Order with id ${oderId} not found`
            })
        }
    } catch (error) {
        res.status(500).json({
            message : error
        })        
    }
}

const create = async(req, res) => {
    try {
        const orderData = req.body;
        const insert = await order.create(orderData)
        .then(row => {
            res.status(201).json({
                message : "Insert success"
            })
        })
        .catch(err => {
           res.status(400).json({
               message : err
           })
        })
    } catch (error) {
        res.status(500).json({
            message : error
        })
    }
}

const update = async(req, res) =>{
    try {        
        const orderId = req.params.id;
        const orderById = await order.get(orderId);
        const orderData = req.body;
        if(orderById.length !== 0){
            const update = await order.update(orderData, orderId)
            .then(row => {
                res.status(201).json({
                    message : `Order with id ${orderId} hasbeen updated`
                })
            })
            .catch(err => {
                res.status(404).json({
                    message : err
                })
            })
        }else{
            res.status(404).json({
                message : `Order with id ${orderId} not found`
            })
        }
    } catch (error) {
        res.status(500).json({
            message : error
        })
    }
}

const distroy = async(req, res) => {
    try {      
        const orderId = req.params.id;
        const orderById = await order.get(orderId);
        if(orderById.length !== 0){
            const distroy = await order.remove(orderId)
            .then(row => {
                res.status(201).json({
                    message : `Order with id ${orderId} hasbeen deleted`
                })
            })
            .catch(err => {
               res.status(400).json({
                   message : err
               })
            })
        }else{
            res.status(404).json({
                message : `Order with id ${orderId} not fount`
            })
        }
    } catch (error) {
            res.status(500).json({
                message : error
            })
    }
}

module.exports={
    get,
    getByid,
    create,
    update,
    distroy
}