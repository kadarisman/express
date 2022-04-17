const db = require("../services/db");

function get(id = 0){
    let query = `SELECT * FROM categories`
    if(id !== 0){
        query += ` WHERE id =${parseInt(id)}`;
    }
    const data = db(query);
    return data;
}

function create(data){
    const query = `INSERT INTO categories (name) values("${data.name}")`;
    const insert = db(query);
    return insert;
}

function update(data, id){
    const query =`UPDATE categories set name="${data.name}" WHERE id=${parseInt(id)}`;
    const update = db(query);
    return update;
}

function remove(id){
    const query =`DELETE FROM categories WHERE id=${parseInt(id)}`;
    const deleteData = db(query);
    return deleteData;
}

module.exports ={
    get,
    create,
    update,
    remove
}