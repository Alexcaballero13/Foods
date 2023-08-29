const axios = require('axios')
const { API_KEY } = process.env;
const { Recipe } = require('../db')

async function getRecipes() {
    const OnlyWhatIneed = []

    const Recipes = await Recipe.findAll()

    if (Recipes.length === 0) {
        let response = await axios(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`)

        response.data.results.map(obj => {
            const steps = []
            obj.analyzedInstructions.map(obj1 => obj1.steps.map(obj2 => steps.push(obj2.step)))
            const objTest = {
                name: obj.title,
                image: obj.image,
                summary: obj.summary,
                diets: obj.diets,
                health_score: obj.healthScore,
                step_by_step: steps
            }
            OnlyWhatIneed.push(objTest)
        })
        await Recipe.bulkCreate(OnlyWhatIneed)
        return OnlyWhatIneed

    }

    return Recipes

}
module.exports = {
    getRecipes
}