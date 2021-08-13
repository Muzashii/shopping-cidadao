/* const { Router } = require('express');
const MainController = require('../../controllers/mainController');

const routes = Router();
const mainController = new MainController();

routes.get('/user', mainController.user);

module.exports = routes; */

const express = require('express');
const router = express.Router();
const controller = require('../../controllers/mainController')

router.get('/', controller.get);


router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);
module.exports = router;