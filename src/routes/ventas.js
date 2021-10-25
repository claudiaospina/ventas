const router =require('express').Router();
const ventasController = require('../controllers/ventasController');

router.get('/', ventasController.list)
router.post('/add-ventas', ventasController.save)
router.get('/update-ventas/:IDVenta', ventasController.edit)
router.post('/update-ventas/:IDVenta', ventasController.update)
router.get('/delete-ventas/:IDVenta', ventasController.delete)





module.exports = router;
