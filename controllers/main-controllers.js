const createPath = require('../helpers/create-path');

const getIndex = (req, res) => {
    const title = 'Home';
    res.render(createPath('index'), { title });
};


module.exports = {getIndex};
