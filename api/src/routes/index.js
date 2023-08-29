const { Router } = require('express');
// Importar todos los routers;
const recipeRouter = require('./recipesRouter');


const router = Router();

// Configurar los routers
router.use('/recipes', recipeRouter);


module.exports = router;
