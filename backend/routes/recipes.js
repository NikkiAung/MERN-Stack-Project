const express = require('express');
const RecipeController = require('../controllers/RecipeController');
const { body, validationResult } = require('express-validator');

const router = express.Router();

router.get('', RecipeController.index);
router.post('', body('title').notEmpty(), body('description').notEmpty(), body('ingredients').notEmpty().isArray({min:3}) ,(req, res, next) => {
    const result = validationResult(req);
    if(!result.isEmpty()) {
        return res.status(400).json({error:result.mapped()});
    } else {
        next();
    }
}, RecipeController.store);
router.get('/:id', RecipeController.show);
router.delete('/:id', RecipeController.destroy);
router.patch('/:id', RecipeController.update);

module.exports = router;
