var knex = require('../config/knex');
class Topic {


    async find(id) {
        let raw= await knex('topic').where({ id: id })      
        return raw;       
    }
    async findAll(){
        let raw = await knex.select().from('topic').orderBy('id', 'asc')  ;
        return raw;
    }



}

module.exports = new Topic();