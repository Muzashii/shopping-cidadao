const { Router } = require('express');
const db = require('../../database/qneo4j');
const cql = require('../../queries/cql');

const subscriberRouter = Router();

subscriberRouter.post('/upload', async(req, res) => {
    const data = req.body;
    const { cypher, params } = cql.createColaborators({ data });
    try {
        const [responseData] = await db.execute({ cypher, params });
        return res.json(responseData);
    } catch (error) {
        return res.status(400).json({
            message: 'Aconteceu um erro ao executar o driver neo4j',
            details: error,
        });
    }
});

subscriberRouter.get('/colaborators', async(req, res) => {
    const { cypher } = cql.getColaborators();
    try {
        const colaborators = await db.execute({ cypher });
        return res.json(colaborators);
    } catch (error) {
        return res.status(400).json({
            message: 'Aconteceu um erro ao executar o driver neo4j',
            details: error,
        });
    }
});

subscriberRouter.post('/predefined', async(req, res) => {
    const data = req.body;
    const { params, cypher } = cql.createPrefined({ data });
    try {
        const [predefined] = await db.execute({ cypher, params });
        return res.json(predefined);
    } catch (error) {
        return res.status(400).json({
            message: 'Aconteceu um erro ao executar o driver neo4j',
            details: error,
        });
    }
});

subscriberRouter.get('/predefined', async(req, res) => {
    const { cypher } = cql.getPDefined();
    try {
        const predefined = await db.execute({ cypher });
        return res.json(predefined);
    } catch (error) {
        return res.status(400).json({
            message: 'Aconteceu um erro ao executar o driver neo4j',
            details: error,
        });
    }
});

module.exports = subscriberRouter;