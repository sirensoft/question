var knex = require('../config/knex');

class Test {
    async findTopic(){
        let rows = await knex.select().table('topic');
        return rows;
    }   
    async findAnswer(){
        let rows = await knex('answer').where('id',6)
        return rows;
    }   
}

module.exports = new Test();