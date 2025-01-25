import Pdf from "../model/pdf.model.js"
 export const getPdf=async(req,res) =>{
    try {
        const pdf=await Pdf.find()
        res.status(200).json(pdf)
    } catch (error) {
        console.log("Error: ",error)
        res.status(500).json(error)
    }
 }