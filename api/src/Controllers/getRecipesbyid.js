const { Recipe } = require('../db')
const { API_KEY } = process.env;

async function getRecipesbyid(id) {

    if (id.length === 36) {
        const findid = await Recipe.findByPk(id)
        if (findid) return findid
        else throw new Error('There is not any recipe with that ID!')
    }
}
module.exports = {
    getRecipesbyid
}