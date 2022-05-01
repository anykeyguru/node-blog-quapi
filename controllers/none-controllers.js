const createPath = require('../helpers/create-path');
const notFoundRoute = (req, res) => {
    console.log('asdasdas');
    res
        .status(404)
        .render(createPath('error'), { title: "error" });
};

module.exports = {notFoundRoute};