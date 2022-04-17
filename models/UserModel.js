const db = require("../services/db");

function get (id = 0){
    let query = "SELECT * FROM users";
    if (id !== 0){
        query += ` WHERE id = ${parseInt(id)}`;
    }
    const data = db(query);
    return data;
}

function create(data){
    const query = `INSERT INTO users (email, name, address, status) values ("${data.email}", "${data.name}", "${data.address}", ${data.status})`;
    const insert = db(query);
    return insert;
}

function update(data, id){
    const query = `UPDATE users set email="${data.email}", name="${data.name}", address="${data.address}", status=${data.status} WHERE id=${parseInt(id)}`;
    const update = db(query);
    return update;
}

function remove(id){
    const query = `DELETE FROM users WHERE id = ${parseInt(id)}`;
    const deleteData = db(query);
    return deleteData;
}


module.exports = {
    get,
    create,
    update,
    remove
}