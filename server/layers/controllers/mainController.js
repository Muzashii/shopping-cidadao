class mainController {
    async getAll(req, res) {
        res.status(201).send('Requisição recebida com sucesso!');
    }

}




exports.get = async(req, res, next) => {
    res.status(201).send('Requisição recebida com sucesso!');
};
exports.post = (req, res, next) => {
    res.status(201).send('Requisição recebida com sucesso!');
    console.log("foi")
};
exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send(`Requisição recebida com sucesso! ${id}`);
};
exports.delete = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Requisição recebida com sucesso! ${id}`);
};