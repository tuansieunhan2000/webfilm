const express = require('express')
const router = express.Router()

const siteConstroller = require('../controllers/siteController')
router.get('/search', siteConstroller.search)
router.get('/sortByNameA_Z',siteConstroller.sortByNameAZ);
router.get('/sortByNameZ_A',siteConstroller.sortByNameZA);
router.get('/sortByYear',siteConstroller.sortByYear);


router.get('/:slug', siteConstroller.error)
router.get('/', siteConstroller.index)

module.exports = router