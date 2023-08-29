const { Recipe } = require('../db')

async function postRecipes(name, image, summary, health_score, step_by_step, diets) {

    if (name && image && summary && health_score && step_by_step) {
        await Recipe.create({ name, image, summary, health_score, step_by_step, diets })
    }
    else throw new Error('Missing or incorrect information')
}
module.exports = {
    postRecipes
}