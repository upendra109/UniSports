const express = require('express')
const router = express.Router()
const {createProduct,getAllProducts, hi} = require('../controllers/ProductController')

router.route('/create').post(createProduct)
router.route('/all').get(getAllProducts)
router.route('/').get(hi)

module.exports = router