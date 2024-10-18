import express from 'express'
import { createOrder, verfiyOrder } from '../controllers/payment.js'

const router = express.Router()

router.post("/create-order",createOrder)
router.post("/verify-order",verfiyOrder)

export default router