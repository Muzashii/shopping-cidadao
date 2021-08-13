const QNeo4j = require('@qualitech/qneo4j');
const config = require('../../app-services-configs.js');

const { neo4j } = config;
const { url_neo4j, neo4j_user, neo4j_password } = neo4j;

const db = new QNeo4j({
    url: url_neo4j,
    username: neo4j_user,
    password: neo4j_password,
    raw: false,
    autoCloseDriver: true,
    notifyError: (error, query) => console.log(error, query),
    driverConfig: {},
});

module.exports = db;