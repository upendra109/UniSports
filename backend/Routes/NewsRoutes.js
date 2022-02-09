const express = require('express')
const router = express.Router()
const {getAllNews,createNews} = require('../controllers/NewsController')

router.route('/create').post(createNews)
router.route('/all').get(getAllNews)

module.exports = router