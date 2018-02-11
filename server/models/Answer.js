var knex = require('../config/knex');
class Answer{
    async add(jdata){        
        try {         
            let res = await knex('answer').insert({topic_id:7,rawdata:JSON.stringify(jdata)});          
            return res;
        } catch (error) {
            return error;
        }        
       
        
    }
}
module.exports = new Answer();