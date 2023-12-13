const mongoose= require("mongoose")
//create the schema

const schema=mongoose.Schema

const ProductSchema= new schema(
   [ {
        nom:{type:String},
        typeCours:{type:String},
        objectif :{type:String},
   }]
)
module.exports =mongoose.model("ProdModel",ProductSchema)    