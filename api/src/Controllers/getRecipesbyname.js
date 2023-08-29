const { Recipe } = require('../db')
const { Op } = require('sequelize')
const { API_KEY } = process.env;

async function getRecipesbyname(name) {
    const findnamebd = await Recipe.findAll({ where: { name: { [Op.iLike]: `%${name}%` } } })

    if (findnamebd.length > 0) return findnamebd
    else throw new Error('There is not any recipe with that name')
}

module.exports = {
    getRecipesbyname
}