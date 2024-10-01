const express = require('express');
const RecipeController = require('../controllers/RecipeController');
const { body } = require('express-validator');
const errorMessagehanlder = require('../Middleware/handleErrorMessage');
const router = express.Router();
const upload = require('../helpers/upload')
router.get('', RecipeController.index);
router.post('', [ 
                    body('title').notEmpty(), 
                    body('description').notEmpty(), 
                    body('ingredients').notEmpty().isArray({min:3})
                ], errorMessagehanlder , RecipeController.store);
router.get('/:id', RecipeController.show);
router.post('/:id/upload',upload.single('photo'),RecipeController.upload)
router.delete('/:id', RecipeController.destroy);
router.patch('/:id', RecipeController.update);

module.exports = router;
