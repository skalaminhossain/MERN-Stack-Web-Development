const router = require('express').Router()
// const handler = require('../contorllers/contorllers')
const PlayersController = require('../contorllers/players')




// router.post('/Players' , PlayersController)
// router.post('/user' , user)
router.get('/findPlayers' , PlayersController.ReadPlayers)

module.exports = router