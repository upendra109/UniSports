const express =require('express')
const router = express.Router()
const {createTicket,all} = require('../controllers/TicketController')

router.route('/create').post(createTicket)
router.route('/all').get(all)

module.exports = router