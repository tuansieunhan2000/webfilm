const express = require('express')
const router = express.Router()

const layoutController = require('../controllers/layoutController')
// <<<<<<< HEAD
// router.get('/detail/:key?', layoutController.ProductDetail)
// router.get('/', layoutController.show)
// =======
router.get('/product-detail?:key', layoutController.show_detail)
router.post('/product-detail?:key', layoutController.comment)
router.get('/products', layoutController.get_all_products)
router.get('/:slug', layoutController.error)

//router.get('/products/:category_id', layoutController.get_products)
// >>>>>>> d84cbc8a6e1a9bf70d7bf37e0b0cf35fa05314a5

module.exports = router