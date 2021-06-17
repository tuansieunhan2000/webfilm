const express = require('express')
const router = express.Router()

const siteConstroller = require('../controllers/siteController')
router.get('/search', siteConstroller.search)
router.get('/:slug', siteConstroller.error)
router.get('/', siteConstroller.index)

module.exports = router