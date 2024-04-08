const express = require("express");
const router = express.Router()
const OrderController = require('../controllers/OrderController');
const { authMiddleware, authUserMiddleware} = require('../middleware/authMiddleware');

router.post('/create', OrderController.createOrder)
router.get('/get-all-order/:id',authUserMiddleware, OrderController.getAllOrderDetails)
router.get('/get-details-order/:id', OrderController.getDetailsOrder)
router.delete('/cancel-order/:id',authUserMiddleware, OrderController.cancelOrderDetails)
router.get('/get-all-order',authMiddleware, OrderController.getAllOrder)




module.exports = router