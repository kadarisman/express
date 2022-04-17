const db = require("../services/db");

function get(id = 0){
    let query = `SELECT * FROM orders`;
    if(id !== 0){
        query += ` WHERE id=${parseInt(id)}`;
    }
    const data = db(query);
    return data;
}

function create(data){
    const query = `INSERT INTO orders (product_id, user_id, count, status) VALUES (${data.product_id}, ${data.user_id}, ${data.count}, ${data.status})`;
    const insert = db(query);
    return insert;
}

function update(data, id){
    const query = `UPDATE orders SET product_id=${data.product_id}, user_id=${data.user_id}, count=${data.count}, status=${data.status} WHERE id=${parseInt(id)}`;
    const update = db(query);
    return update;
}

function remove(id){
    const query = `DELETE FROM orders WHERE id=${parseInt(id)}`;
    const deleteData = db(query);
    return deleteData;
}

module.exports={
    get,
    create,
    update,
    remove
}