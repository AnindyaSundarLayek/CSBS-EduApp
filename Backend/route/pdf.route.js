import express from "express"
import { getPdf } from "../controller/pdf.controller.js"

const router= express.Router()

router.get("/",getPdf);

export default router;