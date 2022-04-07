const jquery = require('jquery');
const path = require('path')
const IndexController = {};

const fileDir = path.join(path.dirname(__dirname), 'views')
const query = require('../model/query.js')
IndexController.index = (req, res) => {
    res.sendFile(`${fileDir}/index.html`)
}

IndexController.login = (req, res) => {
    res.sendFile(`${fileDir}/login.html`)
}

IndexController.dade = async(req,res) =>{
    let sql = 'select * from car';
    let row = await query(sql)
    res.json(row)
}

module.exports = IndexController;