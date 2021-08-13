class Cql {
    constructor() {
        this.labels = {
            subscriber: 'Assinante',
            subscriberType: 'TipoAssinante',
        };
        this.relationships = {
            CHARACTERIZES: 'CARACTERIZA',
            PERFORMS: 'REALIZA',
        };
    }

    createConstraints() {
        const { subscriber, subscriberType } = this.labels;
        return [
            `CREATE CONSTRAINT ON (tipoAssinante:${subscriberType}) ASSERT (tipoAssinatura.id) IS UNIQUE`,
            `CREATE CONSTRAINT ON (assinante:${subscriber}) ASSERT (assinante.cpf) IS UNIQUE`,
            `CREATE CONSTRAINT ON (assinante:${subscriber}) ASSERT (assinante.id) IS UNIQUE`,
        ];
    }

    getOneUser({ id }) {
        this.labels;
        return {
            cypher: `
            MATCH (u:User {id: $id})
            RETURN u
          `,
            params: { id },
        };
    }
}

module.exports = new Cql();