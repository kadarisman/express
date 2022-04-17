const user = require("../models/UserModel");

const get = async (req, res ) => {
    try {
        const usersData = await user.get();
        if(usersData.length !== 0){
            res.status(201).json({users : usersData})
        }else{
            res.status(404).json({message : "Data not found"})
        }
    } catch (error) {
        res.status(401).json({message : error});        
    }
}

const getByid = async (req, res) => {
    try {        
        const userID = req.params.id;
        const userById = await user.get(userID);
        if(userById.length !==0){
            res.status(201).json({user : userById});
        }else{
            res.status(404).json({message : `Data with id ${userID} not found`})
        }
    } catch (error) {
        res.status(401).json({message : error});
    }
}

const create = async (req, res) =>{
    try {
        const userData = req.body;
        const insert = await user.create(userData)
        .then(row => {
            res.status(201).json({
                user : userData,
                message : "Insert success"
            })
        })
        .catch(err => {
            res.status(400).json({message : err})
        })
    } catch (error) {
        res.status(500).json({error})
    }
}

const update = async (req, res) => {
    try {
        const userId = req.params.id;
        const userById = await user.get(userId);
        const userData = req.body;
        if(userById.length !== 0){
            const update = await user.update(userData, userId)
            .then(row => {
                res.status(201).json({
                    message : `User with id ${userId} hasbeen updated`
                })
            })
            .catch(err => {
                res.status(400).json({message : err})
            })
        }else{
            res.status(404).json({
                message : `User with id ${userID} not found`
            })
        }
    } catch (error) {
        res.status(500).json({message : error})        
    }
}

const distroy = async (req, res ) =>{
    try {
        const userId = req.params.id;
        const userById = await user.get(userId);
        if(userById.length !== 0){
            const distroy = await user.remove(userId)
            .then(row => {
                res.status(201).json({ message : `User with id ${userId} hasbeen deleted`})
            })
            .catch(err => {
                res.status(400).json({ message : err });
            })
        }else{
            res.status(404).json({
                message : `User with id ${userId} not found`
            })
        }
    } catch (error) {
        res.status(500).json({ message : error });
    }
}

module.exports ={
    get,
    getByid,
    create,
    update,
    distroy
}