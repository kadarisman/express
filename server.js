const express = require('express');
const { get, create, update, remove } = require('./models/ProductModel');
const app = express();

const router = require("./routers/indexRouter");

const port = 3001;

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

//root
app.get("/", (req, res) => {
    res.json("hello node js for backend");
});


app.use(router);

//get all
// app.get("/products", async (req, res) => {
//     const products = await get();
//     res.json(products);
// });

//get by id
// app.get("/products/:id", async (req, res) => {
//     const productId = req.params.id;
//     const product = await get(productId);
//     res.json(product);
// })

//insert data
// app.post("/products", async(req, res) => {
//     const productData = req.body;
//     const insertData = await create(productData);
//     res.json(insertData);
// })

//update data by id
// app.put("/products/:id", async(req, res) => {
//     const productId = req.params.id;
//     const productData = req.body;

//     const updateProduct = await update(productData, productId);
//     res.json(updateProduct);
// })

//delete data
// app.delete("/products/:id", async(req, res) => {
//     const productId = req.params.id;
//     const deleteData = await remove(productId);
//     res.json(deleteData);
// })

app.listen(port, () =>{
    console.log(`server jalan di port ${port}`);
});