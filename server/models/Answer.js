var knex = require('../config/knex');

class Answer{
    async create(data){        
        try {     
            //let json = JSON.stringify(json);     
            let res = await knex('answer').insert({answer:data});  
            return res;
        } catch (error) {
            return error;
        }            
    }
}

module.exports = new Answer();