const db = require("../services/db");

function get (id = 0){
    let query = "SELECT * FROM products";
    if (id !== 0) {
        query += ` WHERE id = ${parseInt(id)}`;
    }
    const data = db(query);
    return data;
}

function create(data){
    const query = `INSERT INTO products (name, price, description, category_id, status, stock, images) values ("${data.name}", ${data.price}, 
    "${data.description}", ${data.category_id}, ${data.status}, ${data.stock}, "")`;
    const insert = db(query);
    return insert;
}

function update(data, id){
    const query = `UPDATE products set name="${data.name}", price=${data.price}, description="${data.description}", category_id=${data.category_id}, status=${data.status}, stock=${data.stock} WHERE id=${parseInt(id)}`;

    const update = db(query);
    return update;
}

function remove(id){
    const query = `DELETE FROM products WHERE id = ${parseInt(id)}`;
    const deleteData = db(query);
    return deleteData;
}


module.exports = {
    get,
    create,
    update,
    remove
}