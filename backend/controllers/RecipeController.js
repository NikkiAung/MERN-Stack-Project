const Recipe = require('../models/Recipe');
const RecipeController = {
    index : async (req, res) => {
        let recipes = await Recipe.find().sort({createAt:-1})
        return res.json(recipes);
    },
    store : async (req, res) => {
        const {title, description, ingredients} = req.body;
        const recipe = await Recipe.create({
            title, 
            description,
            ingredients
        })
        return res.json(recipe);
    },
    show : async (req, res) => {
        try {
            let id = req.params.id;
            let recipe = await Recipe.findById(id);
            return res.json(recipe)
        } catch (error) {
            return res.status(404).json({msg: 'recipe not found!'});
        }  
    },
    destroy : (req, res) => {
        return res.json({msg: "del recipe"})
    },
    update : (req, res) => {
        return res.json({msg: "update recipe"})
    },
}

module.exports = RecipeController;