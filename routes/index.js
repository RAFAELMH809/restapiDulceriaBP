const { Router } = require('express');

const controllers = require('../controllers');

const router = Router();

router.get('/',  (req, res) => res.send('Bienvenidos'));

router.post('/dulces', controllers.createDulce);
router.get('/dulces', controllers.getAllDulces);
router.delete('/dulces/:id', controllers.deleteDulce);
router.put('/dulces/:id', controllers.updateDulce);

module.exports = router;
