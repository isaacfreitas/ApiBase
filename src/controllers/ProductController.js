const mongoose = require("mongoose");

const Product = mongoose.model('Product');

module.exports = {

    async index(req,res){

        const { page = 1 } = req.query;
        const products = await Product.paginate({},{ page , limit : 5 });

        return res.json(products);

    },

    //detalhe

    async show(req,res){
        const product = await Product.findById(req.params.id);

        return res.json(product);
    },
    
    
    //create
    async store(req,res){
        const product = await Product.create(req.body);

        return res.json(product);
    },

    //update
    async update(req,res){
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new:true});

        return res.json(product);
    },

    //Delete 
    async destroy(req,res){
        await Product.findByIdAndRemove(req.params.id);
        return res.send(); 
    }
};   