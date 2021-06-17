const express = require('express')
const router = express.Router()
const store = require("../util/multer")

const adminController = require('../controllers/adminController')

router.post('/login',adminController.login)
router.get('/', adminController.index)
router.get('/categories', adminController.getCategories)    
router.get('/insert', adminController.getProducts)
router.get('/recycle_bin', adminController.getBin)
router.get('/login', adminController.showlogin)
router.get('/logout', adminController.logout)
router.delete('/delete/product/:id',adminController.delete)
router.delete('/delete/product/:id/force',adminController.forceDelete)
router.patch('/restore/product/:id',adminController.restore)

router.delete('/delete/category/:id',adminController.delete_cat)
router.delete('/delete/category/:id/force',adminController.forceDelete_cat)
router.patch('/restore/category/:id',adminController.restore_cat)


// router.get('/insert', adminController.waitInsert)
router.post('/insert', store.single('image'),adminController.insertProduct)
// router.post('/insertCategories', adminController.insertCategory)
// product property upadte.. 
// router.get('/products/?:productDetail',adminController.productDetail)
router.get('/productDetail?:key',adminController.productDetail)
router.put('/productUpdate',store.single('image'),adminController.productUpdate)
router.get('/search', adminController.search)
router.post("/categoryInsert",adminController.insertCategory)
router.put("/categoryUpdate",adminController.updateCategory)
router.get('/:slug', adminController.error)

module.exports = router