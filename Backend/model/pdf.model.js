import mongoose from "mongoose";
const pdfSchema=mongoose.Schema({
    name:String,
    price:Number,
    category:String,
    image: String,
})

const Pdf= mongoose.model("Pdf",pdfSchema)
export default Pdf;