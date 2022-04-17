const categori = require("../models/CategorieModel");

const get = async (req, res) =>{
    try {
        const categoriData = await categori.get();
        if(categoriData.length !== 0){
            res.status(201).json({categories : categoriData})
        }else{
            res.status(404).json({message : "Data not found"})
        }
    } catch (error) {
        res.status(500).json({message : error})
    }
}

const getById = async (req, res) => {
    try {
        const categoriId = req.params.id;
        const categoriById = await categori.get(categoriId);
        if(categoriById.length !== 0){
            res.status(201).json({categori : categoriById})
        }else{
            res.status(404).json({message : `Data with id ${categoriId} not found`})
        }
    } catch (error) {
        res.status(500).json({message : error})
    }
}

const create = async (req, res) =>{
    try {
        const categoriData = req.body;
        const insert = await categori.create(categoriData)
        .then(row => {
            res.status(201).json({
                categori : categoriData,
                message : "Insert success"
            })
        })
        .catch(err => {
            res.status(400).json({message : err})
        })    
    } catch (error) {
        res.status(500).json({message : error})
    }
    
}

const update = async(req, res) =>{
    try {
        const categoryId = req.params.id;
        const categoriById = await categori.get(categoryId);
        const categoriData = req.body;
        if(categoriById.length !== 0){            
            const update = await categori.update(categoriData, categoryId)
            .then(row => {
                res.status(201).json({
                    message : `Categori with id ${categoryId} hasbeen updated`
                })
            })
            .catch(err => {
                res.status(400).json({message : err})
            })
        }else{
            res.status(404).json({
                message : `Categori with id ${categoryId} not found`
            })
        }
    } catch (error) {
        res.status(500).json({message : error})
    }    
}

const distroy = async(req, res) =>{
    try {
        const categoriId = req.params.id;
        const categoriById = await categori.get(categoriId);
        if(categoriById.length !== 0){
            const distroy = await categori.remove(categoriId)
            .then(row =>{
                res.status(201).json({
                    message : `Categori with id ${categoriId} hasbeen deleted`
                })
            })
            .catch(err => {
                res.status(400).json({
                    message : err
                })
            })
        }else{
            res.status(404).json({
                message : `Categori with id ${categoriId} not found`
            })
        }
        
    } catch (error) {
        res.status(500).json({message : error})
    }
}

module.exports={
    get,
    getById,
    create,
    update,
    distroy
}